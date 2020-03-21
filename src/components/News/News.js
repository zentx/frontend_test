import React, { Component, Fragment } from 'react';
import { StyledNews, StyledDiv } from './News.styled';
import axios from 'axios';
import {Spinner, Jumbotron} from 'react-bootstrap'

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedRow: null,
          loading: true,
          data: [],
          error: null,
        }
    }

    componentDidMount() {
        try {
            axios.get(`https://cors-anywhere.herokuapp.com/https://newscrudapi.herokuapp.com/api/articles/` + this.props.match.params.id +  `.json`)
            .then(res => {
                this.setState({
                    data: res.data,
                    loading: false
                });
            });
            this.props.updateNew();
        } catch (error) {
            this.setState({
              error,
              loading: false
            });
          }
        
    }

      render(){
            const { data, loading } = this.state;

            if (loading) return <StyledDiv><Spinner animation="grow" variant="primary" size="lg" /></StyledDiv>;


          return(
            <StyledNews>
                <Jumbotron>
                    <h1>{ data.title }</h1>
                    <h3>
                        { data.description }
                    </h3>
                    <br/>
                    <img src={ data.imageUrl } className="image"/>
                    <br/>
                <p>{ data.body }</p>
                </Jumbotron>
            </StyledNews>
          );
      }
}

export default News;