import styled from 'styled-components';
import { Button } from 'antd';

export const LoginWrapper = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    max-width: 500px;
`

export const ButtonLogin = styled(Button)`
    width: 100%;
`

export const Image = styled.img`
    position: absolute;
    left: -80% ;
    width: 90%;
`
export const Logo = styled.img`
    position: absolute;
    top: -70%;
    width: 80%;
    `