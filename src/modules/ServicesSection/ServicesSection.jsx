import React from 'react';
import styled from 'styled-components';

import icon from 'static/icon.svg';
import { Title, Text } from 'components/Typography';
import { RoundIcon } from 'components/Icon';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    padding-bottom: 70px;
`;
const CardWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
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
const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-top-right-radius: 70px;
    border-bottom-left-radius: 70px;
    transition: all ease-in .2s;
    &:hover {
        box-shadow: 0 0 50px rgba(0,0,0,0.1);
    }
`;
const CardItemTitle = styled.div`
    font-size: 22px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-transform: capitalize;
    font-weight: 500;
`;
const CardItemInfo = styled(Text)`
    text-align: center;
`;

export default () => {

    const arr = [
        {
            icon: icon,
            title: 'website trafic',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys.'
        },
        {
            icon: icon,
            title: 'website trafic',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys.'
        },
        {
            icon: icon,
            title: 'website trafic',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys.'
        },
        {
            icon: icon,
            title: 'website trafic',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys.'
        },
        {
            icon: icon,
            title: 'website trafic',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys.'
        },
        {
            icon: icon,
            title: 'website trafic',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys.'
        }
    ]

    return <Wrap id="services">
        <Title>our services</Title>
        <CardWrap>
            {arr.map((item, i) => {
                return (
                <CardItem>
                    <RoundIcon 
                        src={item.icon}
                        width={'70px'}
                        height={'70px'}
                        iconSize={'35px'} />
                    <CardItemTitle>{item.title}</CardItemTitle>
                    <CardItemInfo>{item.info}</CardItemInfo>
                </CardItem>
                )
            })}
        </CardWrap>
    </Wrap>
}