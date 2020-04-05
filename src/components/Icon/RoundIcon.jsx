import styled from 'styled-components';

export default styled.div`
    width: ${({ width }) => width || ''};
    height: ${({ height }) => height || ''};
    border: 1px solid #8C5FF1;
    border-radius: 50%;
    background-image: url(${({src}) => src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${({ iconSize }) => iconSize || ''};
`;