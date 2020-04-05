import React from 'react';
import styled from 'styled-components';

import img from 'static/img.jpg';

import { Title } from 'components/Typography';

const Wrap = styled.div`
    padding: 30px;
    @media screen and (max-width: 780px) {
        & {
            padding: 15px;
        }
    }
`;
const CardWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media screen and (max-width: 1000px) {
        & {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media screen and (max-width: 780px) {
        & {
            grid-template-columns: 1fr;
        }
    }
`;
const CardImg = styled.img`
    transition: all ease-in .3s;
    width: 100%;
    height: 100%;
`;
const CardOverlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease-in .3s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;

`;
const CardOverlayText = styled.div`
    text-align: center;
    font-size: 30px;
    text-transform: capitalize;
    font-weight: 400;
    color: #fff;
`;
const CardItem = styled.div`
    height: 235px;
    position: relative;
    background-image: url(${({ src }) => src });
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    &:hover ${CardImg} {
        transform: scale(1.1);
    }
    &:hover ${CardOverlay} {
        opacity: 1;
    }
    @media screen and (max-width: 780px) {
        & {
            height: 325px;
        }
    }
`;

export default () => {

    const arr = [
        {
            img: img,
            overlaytext: 'Product 1'
        },
        {
            img: img,
            overlaytext: 'Product 2'
        },
        {
            img: img,
            overlaytext: 'Product 3'
        },
        {
            img: img,
            overlaytext: 'Product 4'
        },
        {
            img: img,
            overlaytext: 'Product 5'
        },
        {
            img: img,
            overlaytext: 'Product 6'
        }
    ]

    return <Wrap id="portfolio">
        <Title>Our works</Title>
        <CardWrap>
            {arr.map((item, i) => {
                return (
                <CardItem>
                    <CardImg src={item.img} />
                    <CardOverlay>
                        <CardOverlayText>{item.overlaytext}</CardOverlayText>
                    </CardOverlay>
                </CardItem>
                )
            })}
        </CardWrap>
    </Wrap>
};