import React, { useState } from 'react';
import styled from 'styled-components';

import plus from 'static/plus.svg';
import minus from 'static/minus.svg';

import { Title, Text } from 'components/Typography';

const Wrap = styled.div`
    padding: 0 30px 70px 30px;
`;
const TitleWrap = styled.div`
    padding: 10px 25px;
    margin: 10px 0;
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;
const FaqTitle = styled.div`
    background-color: #f9f9f9;
    font-size: 18px;
    font-weight: 300;
`;
const FaqText = styled(Text)`
    padding: 25px 45px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, .2);
    overflow: hidden;
    margin-bottom: 15px;
    display: none;
`;
const Icon = styled.div`
    width: 18px;
    height: 18px;
    background-image: url(${({ src }) => src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 18px;
`;

export default () => {

    const [toggle, setToggle] = useState(false);

    const arr =[
        {
            id: 0,
            title: 'What is Advik agency ?',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque et distinctio reprehenderit cupiditate expedita aliquam quaerat, cumque ea perferendis quasi illo qui quo, quod at dolor eveniet maxime. Sint, odit!'
        },
        {
            id: 1,
            title: 'What is Advik agency ?',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque et distinctio reprehenderit cupiditate expedita aliquam quaerat, cumque ea perferendis quasi illo qui quo, quod at dolor eveniet maxime. Sint, odit!'
        },
        {
            id: 2,
            title: 'What is Advik agency ?',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque et distinctio reprehenderit cupiditate expedita aliquam quaerat, cumque ea perferendis quasi illo qui quo, quod at dolor eveniet maxime. Sint, odit!'
        },
        {
            id: 3,
            title: 'What is Advik agency ?',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque et distinctio reprehenderit cupiditate expedita aliquam quaerat, cumque ea perferendis quasi illo qui quo, quod at dolor eveniet maxime. Sint, odit!'
        }
    ]

    return <Wrap>
        <Title>faq?</Title>
        {arr.map((item, i) => {
            return <div key={i}>
                <TitleWrap onClick={(e) => {
                    if(e.target.parentNode.lastChild.style.display === 'block') {
                        e.target.parentNode.lastChild.style.display = 'none'
                        setToggle(false);
                    } else {
                        e.target.parentNode.lastChild.style.display = 'block'
                        setToggle(true);
                    }
                }}>
                    <FaqTitle>{item.title}</FaqTitle>
                    <Icon src={toggle ? minus : plus} />
                </TitleWrap>
                <FaqText>{item.text}</FaqText>
            </div>
        })}
    </Wrap>
}