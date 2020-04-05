import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img from 'static/img.jpg';

import { Title } from 'components/Typography';

const Wrap = styled.div`
    padding: 30px 30px 100px 30px;
    background-color: #f9f9f9;
`;
const SliderItem = styled.div`
    border-top-right-radius: 70px;
    border-bottom-left-radius: 70px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;
const SliderItemText = styled.div`
    font-size: 18px;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
`;
const SliderItemImg = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50px;
    background-image: url(${({ src }) => src || ''});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin: 30px 0;
`;
const SliderItemName = styled.div`
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
`;
const SliderItemPosition = styled.div`
    font-size: 16px;
    font-weight: 300;
    text-transform: capitalize;
    color: #333;
    font-family: 'Poppins', sans-serif;
`;
const ReactSlider = styled(Slider)`
    & .slick-track > div {
        display: flex;
        justify-content: center;
    }
    & .slick-slide  > div {
        width: 60%;
        @media screen and (max-width: 1000px) {
            & {
                width: 80%;
            }
        }
        @media screen and (max-width: 780px) {
            & {
                width: 100%;
            }
        }
    }
    & .slick-dots  > li > button::before {
        color: red;
        width: 30px;
        height: 30px;
    }
    & .slick-dots .slick-active > div {
        opacity: 1;
    }
`;
const CustomDot = styled.div`
    width: 10px;
    height: 10px;
    background-color: #8C5FF1;
    border-radius: 10px;
    margin-top: 40px;
    opacity: .5;
    &:hover {
        opacity: 1;
    }
`;

export default () => {

    const arr = [
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, at!',
            img: img,
            name: 'Donald Tramp',
            position: 'CEO'
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, at!',
            img: img,
            name: 'Donald Tramp',
            position: 'CEO'
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, at!',
            img: img,
            name: 'Donald Tramp',
            position: 'CEO'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
          customPaging: () => (
            <CustomDot />
          )
      };

    return <Wrap id="testimonials">
        <Title>what people saying</Title>
        <ReactSlider {...settings}>
            {arr.map((item, i) => {
                return (
                <div>
                    <SliderItem>
                        <SliderItemText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, at!</SliderItemText>
                        <SliderItemImg src={img} />
                        <SliderItemName>Donald Tramp</SliderItemName>
                        <SliderItemPosition>CEO</SliderItemPosition>
                    </SliderItem>
                </div>
                )
            })}
        </ReactSlider>
    </Wrap>
}