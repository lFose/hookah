import styled from 'styled-components';

export default styled.button`
    color: ${({ color }) => color || ''};
    font-size: 16px;
    padding: 12px 0;
    width: ${({ width }) => width || '140px'};
    background-color: ${({ bg }) => bg || ''};
    border: 1px solid ${({ bg }) => bg || ''};
    transition: all ease-in .25s;
    &:hover {
        cursor: pointer;
        background-color: ${({ bgHover }) => bgHover || ''};
        color: ${({ colorHover }) => colorHover || ''};
    }
    @media screen and (max-width: 1000px) {
        & {
            margin-bottom: 20px;
        }
    }
`;