import React, { useState } from 'react';
import styled from 'styled-components';

import menu from 'static/menu.svg';

const FixedMenuWrap = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
    background-color:${({ bg }) => bg === 'default' ? 'transparent' : bg === 'styled' ? '#fff' : 'transparent'};
    z-index: 999999;
    transition: all ease .5s;
    ${({ bg }) => bg === 'styled' && 'box-shadow: 0 0 5px rgba(0, 0, 0, .5);'}
`;
const LogoLink = styled.a`
    text-decoration: none;
    color: ${({ color }) => color === 'default' ? '#fff' : color === 'styled' ? '#000' : '#fff'};
    padding-left: 50px;
    transition: all ease .25s;
    &:hover {
        color: ${({ color }) => color === 'default' ? '#000' : color === 'styled' ? '#8C5FF1' : '#000'};
    }
`;
const NavBarWrap = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    padding-right: 50px;
`;
const NavBarItem = styled.li`
    margin-left: 20px;
    @media screen and (max-width: 780px) {
        & {
            display: none;
        }
    }
`;
const NavBarItemLink = styled.a`
    text-decoration: none;
    color: ${({ color }) => color === 'default' ? '#fff' : color === 'styled' ? '#000' : '#fff'};
    transition: all ease .25s;
    &:hover {
        color: ${({ color }) => color === 'default' ? '#000' : color === 'styled' ? '#8C5FF1' : '#000'};
    }
`;
const SubMenuWrap = styled.div`
    position: absolute;
    top: 65px;
    left: 0;
    right: 0;
`;
const SubMenuItem = styled.a`
    display: block;
    text-decoration: none;
    background-color: #8C5FF1;
    color: #fff;
    padding: 10px 50px;
    border-bottom: 1px solid #000;
    &:hover, &:active, &:focus {
        background-color: #f9f9f9;
    }
    &:hover, &:active, &:focus {
        color: #333;
    }
`;
const Icon = styled.div`
    width: 20px;
    height: 20px;
    background-image: url(${({src}) => src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: none;
    cursor: pointer;
    @media screen and (max-width: 780px) {
        & {
            display: block;
        }
    }
`;

export default () => {

    const arr = [
        {
            id: 'home',
            name: 'Home'
        },
        {
            id: 'services',
            name: 'Services'
        },
        {
            id: 'about',
            name: 'About'
        },
        {
            id: 'portfolio',
            name: 'Portfolio'
        },
        {
            id: 'testimonials',
            name: 'Testimonials'
        },
        {
            id: 'contact',
            name: 'Contact Us'
        }
    ]

    const [toggleMenu, setToggleMenu] = useState(false);
    const [styledMenu, setStyledMenu] = useState('default');

    window.addEventListener('scroll', function(e) {
        e.path[1].pageYOffset >= 400 ? setStyledMenu('styled') : setStyledMenu('default')
      });

    return <FixedMenuWrap bg={styledMenu}>
        <LogoLink color={styledMenu} href="#home">Advik</LogoLink>
        <NavBarWrap>
            <Icon href="#" src={menu} onClick={() => setToggleMenu(!toggleMenu)} />
            {toggleMenu &&
            <SubMenuWrap>
                {arr.map((item, i) => {
                    return (
                        <SubMenuItem 
                            href={`#${item.id}`} 
                            onClick={() => setToggleMenu(false)}>
                            {item.name}
                        </SubMenuItem>
                    )
                })}
            </SubMenuWrap>}
            {arr.map((item, i) => {
                return (
                    <NavBarItem>
                        <NavBarItemLink color={styledMenu} href={`#${item.id}`}>{item.name}</NavBarItemLink>
                    </NavBarItem>
                )
            })}
        </NavBarWrap>
    </FixedMenuWrap>
}