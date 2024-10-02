import { Col, Image, InputNumber } from 'antd';
import styled from 'styled-components';

export const WrapperStyleSmallImage = styled(Image)`
    height: 64px;
    width: 64px;
`

export const WrapperStyleColImage = styled(Col)`
    flex-basis: unset;
    display: flex;
`

export const WrapperStyleNameProduct = styled.h1`
    color: rgb(36,36,36);
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    word-break: break-word;
`

export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120,120,120);
`

export const WrapperPriceProduct = styled.div`
    background: rgb(250,250,250):
    border-radius: 4px;
`
export const WrapperPriceTextProduct = styled.h1`
    font-size: 32px;
    font-weight: 500;
    margin-right: 8px;
    line-height: 40px;
    padding: 10px;
    margin-top: 10px;
`

export const WrapperAdressProduct = styled.div`
    span.address {
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    };
        span.change-address {
        color: rgb(11, 116, 229);
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;  
        }

`

export const WrapperQualityProduct = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    width: 100px;
    border: 1px solid #ccc;
    border-radius: 4px;

`


export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm {
        width: 60px;
        border-top: none;
        border-bottom: none;
    }
    
`