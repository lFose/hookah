import React from 'react';
import styled from 'styled-components';

import bg from 'static/bg.jpg';

import { TitleAnimated } from 'components/Typography';
import { ButtonLink } from 'components/Button';

const Container = styled.div`
    background-image: linear-gradient(rgba(140, 95, 241, .6) 0%, rgba(140, 95, 241, .6) 100%), url(${({ src }) => src || ''});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ContentWrap = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const SubTitle = styled.div`
    max-width: 600px;
    text-align: center;
    margin-bottom: 30px;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
`;

export default () => {
    return <Container src={bg} id="home">
        <ContentWrap>
            <TitleAnimated>creative agency</TitleAnimated>
            <SubTitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla at, sed unde esse provident tenetur dolores </SubTitle>
            <ButtonLink 
                href="#services"
                color={'#000'}
                bg={'#fff'}
                bgHover={'transparent'}
                colorHover={'#fff'}>Get Started</ButtonLink>
        </ContentWrap>
    </Container>
}