import styled from 'styled-components';
import { Card } from 'antd';


export const WrapperCard = styled(Card)`
    width: 200px;
    & img{
        width: 200px;
        height: 200px;
    }
`

export const StyleProductName = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #090D4;
`

export const WrapperReportText = styled.div`
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin: 6px 0 0px;
`

export const WrapperPrice = styled.div`
    color: #090D4;
    font-size: 16px;
    font-weight: 500;
    
`
export const WrapperDiscount = styled.span`
    color: #059669;
    font-size: 12px;
    font-weight: 500;
`

export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120,120,120);
`