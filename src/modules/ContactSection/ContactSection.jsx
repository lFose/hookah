import React from 'react';
import styled from 'styled-components';

import { ButtonLink } from 'components/Button';

const Wrap = styled.div`
    padding: 70px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #8C5FF1;
    @media screen and (max-width: 1000px) {
        & {
            flex-direction: column;
        }
    }
`;
const Title = styled.div`
    font-size: 30px;
    font-weight: 500;
    color: #fff;
    @media screen and (max-width: 1000px) {
        & {
            margin-bottom: 20px;
            text-align: center;
        }
    }
`;

export default () => {
    return <Wrap>
        <Title>Creativity is to think more efficiently.</Title>
        <ButtonLink 
            href="#"
            color={'#000'}
            bg={'#fff'}
            bgHover={'transparent'}
            colorHover={'#fff'}
            width={'105px'}>Contact Now</ButtonLink>
    </Wrap>
} 