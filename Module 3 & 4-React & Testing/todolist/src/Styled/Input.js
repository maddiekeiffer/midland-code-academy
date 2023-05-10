import styled from '@emotion/styled';

const Input = styled.input`
    border-radius: 10px;
    background-color: ${props => props.primary ? '#c9c9c9' : 'grey'};
    color: ${props => props.primary ? 'black' : 'white' };
    margin-right: 15px;
    margin-left: 5px;
`

export default Input;