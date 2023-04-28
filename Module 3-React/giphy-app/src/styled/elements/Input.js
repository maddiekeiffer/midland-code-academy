import styled from '@emotion/styled';

const Input = styled.input((props) => ({
    borderRadius: '5px',
    color: props.theme.secondary,
    marginRight: '20px',
    marginLeft: '5px',
    border: `1px solid ${props.theme.primary}`,
}))

export default Input;