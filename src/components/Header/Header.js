import React, { Component } from 'react';
import { StyledHeader } from './Header.styled';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/img/news.png';

class Header extends Component {
    
    render(){
        
        return(
            <StyledHeader>
                <nav className="menu">
                   <img className="menu_logo"  src={ logo }/>
                    <div className="menu_right">
                        <ul className="menu_list">
                            <li className="menu_list-item"><NavLink  to="/" className={this.props.home ? "menu_link--active": "menu_link"} >INICIO</NavLink ></li>
                            <li className="menu_list-item"><NavLink  to="/news/:id" className={this.props.news ? "menu_link--active  inactive": "menu_link inactive"} >NOTICIAS</NavLink ></li>
                        </ul>

                        
                    </div>
                    <button className="menu_search-button"></button>
                </nav>
            </StyledHeader>
        );
    }
}

export default Header;