import { Col, Image, Rate, Row } from 'antd'
import React, { useState } from 'react'
import smalliporn from '../../assets/images/smalliporn1.webp'
import { WrapperAdressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleSmallImage, WrapperStyleTextSell } from './style'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import * as ProductService from '../../services/ProductService'
import { useQuery } from '@tanstack/react-query'
import Loading from '../LoadingComponent/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { addToCart } from '../../redux/slides/orderSlide'
import { convertPrice } from '../../utils'



const ProductDetailsComponent = ({ idProduct }) => {
    const [numProduct, setNumProduct] = useState(1)
    const user = useSelector((state) => state?.user)
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const onChange = (value) => {
        setNumProduct(Number(value))
    }
    const fetchGetProductDetail = async (context) => {
        const id = context?.queryKey && context?.queryKey[1]
        const res = await ProductService.getDetailProduct(id)
        return res.data
    }

    const handleChangeCount = (type) => {
        if (type === 'increase') {
            setNumProduct(numProduct + 1)
        } else {
            setNumProduct(numProduct - 1)
        }
    }

    const { isLoading, data: productDetail } = useQuery(['products-detail', idProduct], fetchGetProductDetail, { enabled: !!idProduct })

    const handleAddToCart = () => {
        if (!user?.id) {
            navigate('/sign-in', { state: location?.pathname })
        } else {
            dispatch(addToCart({
                orderItem: {
                    name: productDetail.name,
                    amount: numProduct,
                    image: productDetail.image,
                    price: productDetail.price,
                    product: productDetail._id
                }
            }))
        }
    }

    console.log('productDetail', productDetail)
    return (
        <Loading isLoading={isLoading}>
            <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px' }}>
                <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
                    <Image src={productDetail?.image} alt="image product" preview={false} />
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
                <Col span={14} style={{ paddingLeft: '10px' }}>
                    <WrapperStyleNameProduct>{productDetail?.name}</WrapperStyleNameProduct>
                    <div>
                        <Rate allowHalf defaultValue={productDetail?.rating} value={productDetail?.rating} />
                        <WrapperStyleTextSell> | Đã bán 9090909099+</WrapperStyleTextSell>
                    </div>
                    <WrapperPriceProduct>
                        <WrapperPriceTextProduct>{convertPrice(productDetail?.price)}</WrapperPriceTextProduct>
                    </WrapperPriceProduct>

                    <WrapperAdressProduct>
                        <span>  Giao đến  </span>
                        <span className='address'> {user?.address} -</span>
                        <span className='change-address'> Đổi địa chỉ</span>
                    </WrapperAdressProduct>

                    <div style={{ margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
                        <div style={{ marginBottom: '10px' }}>Số Lượng</div>
                        <WrapperQualityProduct>
                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('decrease')}>
                                <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>

                            <WrapperInputNumber onChange={onChange} defaultValue={1} value={numProduct} size='small' />

                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('increase')} >
                                <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>

                        </WrapperQualityProduct>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <ButtonComponent
                            size={20}
                            styleButton={{
                                background: 'rgb(255, 57, 69)',
                                height: '48px',
                                width: '220px',
                                border: 'none',
                                borderRadius: '4px',
                            }}
                            onClick={handleAddToCart}
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
        </Loading>

    )
}

export default ProductDetailsComponent