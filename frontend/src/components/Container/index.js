import styled from 'styled-components'

const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 1px 2px 20px rgba(0, 0, 0, 0.3);
    padding: 30px;
    margin: 80px auto;

    h1 {
        font-size: 24px;
        display: flex;
        align-items: center;
        flex-direction: row;
    }

    h3 {
        margin-top: 16px;
    }

    p {
        margin-top: 4px;
        font-size: 15px;
        margin-left: 4px;
    }
`

export default Container
