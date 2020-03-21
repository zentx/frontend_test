import styled from 'styled-components';
import searchIcon from './../../assets/img/search-icon.png';


export const StyledHeader = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Cabin&display=swap');
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    font-family: 'Cabin', sans-serif;
    overflow: hidden;
    z-index: 20;

.menu {
    background-color: white;
    box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    position: relative;
}

.menu_logo {
    text-indent: -9999999px;
    display: inline-block;
    height: 100%;
    width: 72px;
    margin: 0;
    border:0;
}

.menu_right {
    display: flex;
    justify-content: space-around
    height: 100%;
}

.menu_list {
    list-style-type: none;
    padding: 0;
    height: 100%;
    margin: 0;
    margin-right: 40px;
}

.menu_list-item {
    display: inline-block;
    height: 100%;
    margin-right: 20px;
}

.menu_list-item:last-child {
    margin-right: 0;
}

.menu_link {
    color: #3a3e47;
    display: inline-block;
    height: 45px;
    font-size: 16px;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    padding: 0 3px;
}

.inactive {
    pointer-events: none;
    cursor: default;
}

.menu_link:hover {
    color: #0088a9;
}

.menu_link--active {
    color: #0088a9;
    border-top: 4px solid  #0088a9;
    font-weight: 700;
}

.menu_search-button {
    height: 42px;
    width: 42px;
    border-radius: 50%;
    border: 1px solid #c8c9ce;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: center;
}

`
