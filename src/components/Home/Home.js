import React, { Component } from 'react';
import { StyledHome, StyledDiv } from './Home.styled';
import { ProductCard } from 'react-ui-cards';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          id: 0,
          loading: true,
          data: [],
          error: null,
          redirect: false,
        }
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      } 
    
    renderRedirect = () => {
        if (this.state.redirect) {
            const url = '/news/' + this.state.id;
            return <Redirect to={url} />
        }
    }


    async componentDidMount() {
    try {
        await axios.get(`http://localhost:8000/api/articles.json`)
        .then(res => {
        const data = res.data.map(obj => obj);
        this.setState({ data, loading: false });
        });
        this.props.updateHome();
    } catch (error) {
        this.setState({
          error,
          loading: false
        });
      }
    
    }


    render(){
        var { data, loading } = this.state;

        if (loading) return <StyledDiv><Spinner animation="grow" variant="light" size="lg" /></StyledDiv>;

        let content = [];
            
            let column = [];

            if(data.length > 3){
                data.forEach((article, i) => {
                    if((i+1) % 4 == 0){
                        column.push(<ProductCard key={article.id}
                            float
                            photos={[ article.imageUrl  ]}
                            buttonText = "Leer mas"
                            productName= { article.title }
                            description={ article.description }
                            url={ "/#/news/" + article.id }
                        />);
                        content.push(
                        <div className="card-container" >       
                            { column }
                        </div>
                        );
                      column = [];
                    }else{
                        column.push(<ProductCard key={article.id}
                            float
                            photos={[ article.imageUrl  ]}
                            buttonText = "Leer mas"
                            productName= { article.title }
                            description={ article.description }
                            url={"/#/news/" + article.id}
                            />
                            );
                    }
                })
            if(data.length % 4 != 0){
                content.push(
                    <div className="card-container" >       
                        { column }
                    </div>
                    );
            }
            } else {
                data.forEach((article) => {
                    column.push(
                            <ProductCard key={article.id}
                                float
                                photos={[ article.imageUrl  ]}
                                buttonText = "Leer mas"
                                productName= { article.title }
                                description={ article.description }
                                url={"/#/news/" + article.id}
                            />
                        
                        );
                })
                content.push(
                    <div className="card-container">
                        { column }
                    </div>
                )
                
            }
        

        return(
            <StyledHome>
                {this.renderRedirect()}
                {content}
            </StyledHome>
        );
    }
}

export default Home;