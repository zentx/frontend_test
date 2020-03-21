import styled from 'styled-components';


export const StyledHome = styled.div`
    overflow: auto;
    margin: 100px 50px 100px 50px;

    .card-container {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        
      
        @media screen and (max-width: 768px) {
          flex-flow: column;
        }
    }
    .styles__buy-button___-JjXR{
        background-color: #1a61bc;
    }

    .styles__product-card-description___2ngyd{
        overflow: hidden;
        text-overflow: ellipsis;
        height: 50px;
    }

    .styles__product-card-name___3n1NI{
        font-size: 18px;
        font-weight: bold;
    }

    .card-container a {
        text-decoration: none;
    }

`

export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    overflow: auto;
    margin: 300px 50px;
`