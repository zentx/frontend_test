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
        await axios.get(`https://newscrudapi.herokuapp.com/api/articles.json`)
        .then(res => {
        const data = res.data.map(obj => obj);
        console.log("esto es data");
        console.log(data);
        this.setState({ data, loading: false });
        console.log("termine");
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

        if (loading) return <StyledDiv><Spinner animation="grow" variant="primary" size="lg" /></StyledDiv>;
        console.log("sigo aqui");
        let content = [];
            
            let column = [];

            if(data.length > 3){
                data.forEach((article, i) => {
                    if((i+1) % 4 == 0){
                        console.log("ya tengo 4");
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
                        console.log("puse 1");
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
                console.log("no alcance a llenar");
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
                console.log("o estoy aqui");
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