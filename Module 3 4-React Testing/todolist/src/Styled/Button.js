import styled from '@emotion/styled';

const Button = styled.button`
    color: ${props => (props.primary ? 'white' : 'grey')};
    border-radius: 10px;
    background-color: black;
    font-weight: bold;
    margin-bottom: 10px;

    &:hover {
        background-color: ${props => props.primary ? '#c9c9c9' : 'white'};
        color: black;
        cursor: pointer;
    }
`


export default Button;