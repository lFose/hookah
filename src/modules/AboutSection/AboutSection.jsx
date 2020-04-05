import React from 'react';
import styled from 'styled-components';

import img from 'static/img.jpg';

import { Title, Text } from 'components/Typography';
import { ButtonLink } from 'components/Button';

const Wrap = styled.div`
    background-color: #f9f9f9;
    padding: 50px;
    @media screen and (max-width: 780px) {
        & {
            padding: 10px 0 40px 0;
        }
    }
`;
const CardWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    @media screen and (max-width: 1000px) {
        & {
            grid-template-columns: 1fr;
            padding: 0 20px;
        }
    }
    margin-bottom: 40px;
`;

const CardImg = styled.div`
    background-image: url(${({src}) => src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 350px;
    border-top-right-radius: 70px;
    border-bottom-left-radius: 70px;
`;
const CardInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 1000px) {
        & {
            margin-top: 20px;
        }
    }
`;
const CardInfoTitle = styled.div`
    margin-bottom: 18px;
    font-size: 30px;
    text-transform: capitalize;
    font-weight: 400;
`;
const CardInfoText = styled(Text)`
    margin-bottom: 20px;
`;
const ProgressBarTitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProgressBarTitle = styled.div`
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 400;
`;
const ProgressBarProcent = styled(ProgressBarTitle)``;
const ProgressBarWrap = styled.div`
    position: relative;
    background-color: #ccc;
    height: 15px;
    margin: 15px 0;
`;
const ProgressBar = styled.div`
    height:100%;
    position:absolute;
    top:0;
    left: 0;
    width: ${({ progress }) => progress + '%' || '100%'};
    background-color: #8C5FF1;
`;

export default () => {

    const arr = [
        {
            title: 'Graphics design',
            progress: 92
        },
        {
            title: 'Web design',
            progress: 98
        },
        {
            title: 'Web development',
            progress: 83
        }
    ]

    return <Wrap id="about">
        <Title>about agency</Title>
        <CardWrap>
            <CardImg src={img} />
            <CardInfoWrap>
                <CardInfoTitle>A Creative Webdesign Agency</CardInfoTitle>
                <CardInfoText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</CardInfoText>
                <ButtonLink 
                    href="#"
                    color={'#fff'}
                    bg={'#8C5FF1'}
                    bgHover={'transparent'}
                    colorHover={'#000'}>Learn more</ButtonLink>
            </CardInfoWrap>
        </CardWrap>
        <CardWrap>
            <CardInfoWrap>
                <CardInfoTitle>our key skills</CardInfoTitle>
                {arr.map((item, i) => {
                    return (
                    <>
                        <ProgressBarTitleWrap>
                            <ProgressBarTitle>{item.title}</ProgressBarTitle>
                        <ProgressBarProcent>{item.progress}%</ProgressBarProcent>
                        </ProgressBarTitleWrap>
                        <ProgressBarWrap>
                            <ProgressBar progress={item.progress} />
                        </ProgressBarWrap>
                    </>
                    )
                })}
            </CardInfoWrap>
            <CardImg src={img} />
        </CardWrap>
    </Wrap>
}