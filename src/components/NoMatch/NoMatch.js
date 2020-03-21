import React, { Component, useState } from 'react';
import { StyledDiv } from './NoMatch.styled';
import { Alert } from 'react-bootstrap';

function AlertDismissible() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="light">
          <Alert.Heading>ERROR!</Alert.Heading>
          <p>
            Valor Invalido
          </p>
          <hr />
        </Alert>
      </>
    );
  }

class NoMatch extends Component {
    render(){
        return(
            <StyledDiv> 
                <AlertDismissible/>
            </StyledDiv>
        );
    }
}

export default NoMatch;