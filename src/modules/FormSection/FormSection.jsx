import React from 'react';
import styled from 'styled-components';

import icon from 'static/icon.svg';

import { RoundIcon } from 'components/Icon';
import { Input, TextArea } from 'components/Input';
import { Button } from 'components/Button';
import { Text } from 'components/Typography';

const Wrap = styled.div`
    padding: 100px 50px;
    background-color: #f9f9f9;
`;
const FormWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    @media screen and (max-width: 1000px) {
        & {
            grid-template-columns: 1fr;
        }
    }
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Contacts = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled.div`
    font-size: 30px;
    text-transform: capitalize;
    margin-bottom: 30px;
    font-weight: 400;
`;
const InfoText = styled(Text)`
    margin-bottom: 30px;
`;
const ContactWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ContactText = styled.div`
    font-size: 18px;
    font-weight: 400;
    margin-left: 20px;
`;

export default () => {
    return <Wrap id="contact">
        <FormWrap>
            <Form>
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="E-mail" />
                <TextArea rows="8" placeholder="Your Message" />
                <Button
                    color={'#fff'}
                    bg={'#8C5FF1'}
                    bgHover={'transparent'}
                    colorHover={'#000'}>Send Message</Button>
            </Form>
            <Contacts>
                <Title>contact us</Title>
                <InfoText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptate sunt? Quo perferendis officia voluptatibus consequuntur culpa amet eum, excepturi eligendi iusto quis beatae ad laudantium quaerat corporis, numquam expedita.</InfoText>
                <ContactWrap>
                    <RoundIcon 
                        src={icon}
                        width={'40px'}
                        height={'40px'}
                        iconSize={'20px'} />
                    <ContactText>Los Angeles, CA 90017</ContactText>
                </ContactWrap>
                <ContactWrap>
                    <RoundIcon 
                        src={icon}
                        width={'40px'}
                        height={'40px'}
                        iconSize={'20px'} />
                    <ContactText>+0(000)-00-000-00</ContactText>
                </ContactWrap>
                <ContactWrap>
                    <RoundIcon 
                        src={icon}
                        width={'40px'}
                        height={'40px'}
                        iconSize={'20px'} />
                    <ContactText>Example@example.com</ContactText>
                </ContactWrap>
            </Contacts>
        </FormWrap>
    </Wrap>
}