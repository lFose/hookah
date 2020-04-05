import styled from 'styled-components';

export default styled.a`
    text-decoration: none;
    color: ${({ color }) => color || ''};
    padding: 10px 20px;
    width: ${({ width }) => width || '95px'};
    background-color: ${({ bg }) => bg || ''};
    border: 1px solid ${({ bg }) => bg || ''};
    border-radius: 4px;
    transition: all ease-in .25s;
    &:hover {
        cursor: pointer;
        background-color: ${({ bgHover }) => bgHover || ''};
        color: ${({ colorHover }) => colorHover || ''};
    }
`;