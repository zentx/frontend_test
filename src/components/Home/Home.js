import React, { Component, useState } from 'react';
import { StyledHome, StyledDiv } from './Home.styled';
import { ProductCard } from 'react-ui-cards';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Spinner, Alert } from 'react-bootstrap';

function AlertDismissible(props) {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="light">
          <Alert.Heading>ERROR!</Alert.Heading>
          <p>
            { props.value }
          </p>
          <hr />
        </Alert>
      </>
    );
  }

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
        console.log("comence");
        // axios.get(`https://rickandmortyapi.com/api/character/`)
        // .then(res => {
        // console.log("termine mi req");
        // const data = res.data.map(obj => obj);
        // console.log("esto es data");
        // console.log(data);
        // this.setState({ data, loading: false });
        // console.log("termine");
        // });
        const result = await axios.get("https://cors-anywhere.herokuapp.com/https://newscrudapi.herokuapp.com/api/articles.json");
        console.log("resultado");
        console.log(result.data);
        this.setState({
            data: result.data,
            loading: false
          });
        this.props.updateHome();
    } catch (error) {
        console.log("error");
        this.setState({
          error,
          loading: false
        });
      }
    
    }


    render(){
        var { data, error, loading } = this.state;

        if (error) return <StyledHome> <AlertDismissible value={error.message} /></StyledHome>;

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