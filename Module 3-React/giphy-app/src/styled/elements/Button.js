import styled from '@emotion/styled';

const Button = styled.button((props) => ({
    color: '#E3E3E3',
    backgroundColor: props.theme.primary,
    borderRadius: '5px',
    hover: {
        backgroundColor: props.theme.secondary,
    }
}))

export default Button;