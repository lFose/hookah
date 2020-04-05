import styled from 'styled-components';

export default styled.div`
    width: 15ch;
    font-size: 80px;
    font-weight: 700;
    text-transform: capitalize;
    text-align: center;
    line-height: 1.2;
    margin-bottom: 30px;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid #f9f9f9;
    animation: printed_text 1.5s steps(500) infinite;
    animation-direction: alternate;
    @media screen and (max-width: 780px) {
        & {
            font-size: 40px;
        }
    }
    @keyframes printed_text {
        0% {
            width: 0;
        }
        30% {
            width: 15ch;
        } 
        100% {
            width: 15ch;
        }
    }
`;