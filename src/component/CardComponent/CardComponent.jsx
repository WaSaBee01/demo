import React from 'react'
import { StarFilled } from '@ant-design/icons';
import { StyleProductName, WrapperDiscount, WrapperPrice, WrapperReportText, WrapperCard, WrapperStyleTextSell } from './style';

const CardComponent = (props) => {
    const {countInStock, description,image, name, price, rating, type, discount, selled }=props
   
    return (
        <WrapperCard
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >

            <StyleProductName>{name}</StyleProductName>
            <WrapperReportText>
                <span style={{marginRight: '4px'}}>
                    <span>{rating}</span><StarFilled style={{ fontSize: '13px', color: 'yellow' }} />
                </span>
                <WrapperStyleTextSell> |  Đã bán {selled || 99999999} +</WrapperStyleTextSell>

            </WrapperReportText>
            <WrapperPrice>
                <span style={{marginRight: '8px'}}>{price}</span>
                <WrapperDiscount>
                    {discount || 5} %
                </WrapperDiscount>
            </WrapperPrice>


        </WrapperCard>
    )
}

export default CardComponent