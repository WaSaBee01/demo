import React from 'react'
import { StarFilled } from '@ant-design/icons';
import { StyleProductName, WrapperDiscount, WrapperPrice, WrapperReportText, WrapperCard, WrapperStyleTextSell } from './style';

const CardComponent = () => {
    return (
        <WrapperCard
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >

            <StyleProductName>Iphone 16</StyleProductName>
            <WrapperReportText>
                <span style={{marginRight: '4px'}}>
                    <span>4.5</span><StarFilled style={{ fontSize: '13px', color: 'yellow' }} />
                </span>
                <WrapperStyleTextSell> |  Đã bán 9999999999+</WrapperStyleTextSell>

            </WrapperReportText>
            <WrapperPrice>
                <span style={{marginRight: '8px'}}>9.999.999.999đ</span>
                <WrapperDiscount>
                    -0%
                </WrapperDiscount>
            </WrapperPrice>


        </WrapperCard>
    )
}

export default CardComponent