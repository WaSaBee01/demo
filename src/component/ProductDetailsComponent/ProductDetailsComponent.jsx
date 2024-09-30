import { Col, Image, Row } from 'antd'
import React from 'react'
import iporn from '../../assets/images/iporn1.webp'
import smalliporn from '../../assets/images/smalliporn1.webp'
import { WrapperAdressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleSmallImage, WrapperStyleTextSell } from './style'
import { MinusOutlined, PlusOutlined, StarFilled } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'



const ProductDetailsComponent = () => {
    const onChange = () => { }
    return (
        <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px' }}>
            <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight: '8px'}}>
                <Image src={iporn} alt="image product" preview={false} />
                <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleSmallImage src={smalliporn} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleSmallImage src={smalliporn} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleSmallImage src={smalliporn} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleSmallImage src={smalliporn} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleSmallImage src={smalliporn} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleSmallImage src={smalliporn} alt="image small" preview={false} />
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{paddingLeft: '10px'}}>
                <WrapperStyleNameProduct>Apple iPhone 15 Pro Max</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{ fontSize: '13px', color: 'yellow' }} />
                    <StarFilled style={{ fontSize: '13px', color: 'yellow' }} />
                    <StarFilled style={{ fontSize: '13px', color: 'yellow' }} />
                    <WrapperStyleTextSell> | Đã bán 9090909099+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>99.888.777đ</WrapperPriceTextProduct>
                </WrapperPriceProduct>

                <WrapperAdressProduct>
                    <span>  Giao đến  </span>
                    <span className='address'> DaNang -</span>
                    <span className='change-address'> Đổi địa chỉ</span>
                </WrapperAdressProduct>

                <div style={{margin: '10px 0 20px',padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5'}}>
                    <div style={{marginBottom: '10px'}}>Số Lượng</div>
                    <WrapperQualityProduct>
                        <button style={{ border: 'none', background: 'transparent' }}>
                            <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                        </button>


                        <WrapperInputNumber defaultValue={3} onChange={onChange} size='small' />

                        <button style={{ border: 'none', background: 'transparent' }}>
                            <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                        </button>

                    </WrapperQualityProduct>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                    <ButtonComponent
                        size={20}
                        styleButton={{
                            background: 'rgb(255, 57, 69)',
                            height: '48px',
                            width: '220px',
                            border: 'none',
                            borderRadius: '4px',
                        }}
                        textButton={'Chọn Mua'}
                        styleTextButton={{ color: '#fff', fontSize: '16px', fontWeight: 500 }}
                    ></ButtonComponent>

                    <ButtonComponent
                        size={20}
                        styleButton={{
                            background: '#fff',
                            height: '48px',
                            width: '220px',
                            border: '1px solid rgb(13, 92, 182)',
                            borderRadius: '4px',
                        }}
                        textButton={'Mua Trả Sau'}
                        styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '16px' }}
                    ></ButtonComponent>

                </div>
            </Col>
        </Row>
    )
}

export default ProductDetailsComponent