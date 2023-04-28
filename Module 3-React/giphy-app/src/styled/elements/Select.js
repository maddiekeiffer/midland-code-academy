import styled from '@emotion/styled';

export const Select = styled.select((props) => ({
    borderRadius: '5px',
    color: props.theme.secondary,
    marginRight: '5px',
    marginLeft: '5px',
    border: `1px solid ${props.theme.primary}`,
    cursor: 'pointer',
}))

export const Option = styled.option((props) => ({
    borderRadius: '5px',
    color: props.theme.secondary,
    cursor: 'pointer',
}))
