import styled, { keyframes } from 'styled-components'
import { AiOutlineLoading } from 'react-icons/ai'

export const Nota = styled.div`
    margin-top: 10px;
    padding: 10px 0;
    align-self: center;
    justify-self: center;
    text-align: center;
    color: ${props => (props.nota >= 8 ? 'green' : 'red')};

    svg {
        font-size: 48px;
    }
`

export const InLine = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-content: center;
    align-items: baseline;
    justify-items: center;
`

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(360deg)
    }
`

export const Loading = styled(AiOutlineLoading)`
    animation: ${rotate} 2s linear infinite;
`

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    input {
        flex: 1;
        border: 2px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
    }

    label {
        font-size: 15px;
        margin: 10px 0 4px 0;

        span {
            color: #aaa;
            font-size: 12px;
            margin-left: 10px;
        }
    }

    input:focus {
        border: 2px solid ${props => (props.error ? 'red' : '#722be2')};
    }

    button:hover {
        background: #722be2;
    }
`

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background: #9147ff;
    border: 0;
    padding: 15px;
    margin-top: 15px;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 0.3s;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }
`
