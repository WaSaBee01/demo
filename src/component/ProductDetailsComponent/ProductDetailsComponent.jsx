import { Col, Image, Rate, Row } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import smalliporn from '../../assets/images/smalliporn1.webp'
import { WrapperAdressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleSmallImage, WrapperStyleTextSell } from './style'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import * as ProductService from '../../services/ProductService'
import { useQuery } from '@tanstack/react-query'
import Loading from '../LoadingComponent/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { addToCart, resetOrder } from '../../redux/slides/orderSlide'
import { convertPrice, initFacebookSDK } from '../../utils'
import * as message from '../../component/Message/Message'
import LikeButtonComponent from '../LikeButtonComponent/LikeButtonComponent'
import CommentComponent from '../CommentComponent/CommentComponent'


const ProductDetailsComponent = ({ idProduct }) => {
    const [numProduct, setNumProduct] = useState(1)
    const [errorLimitOrder, setErrorLimitOrder] = useState(false)
    const user = useSelector((state) => state?.user)
    const order = useSelector((state) => state?.order)
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



    useEffect(() => {
        initFacebookSDK()
    }, [])

    useEffect(() => {
        const orderRedux = order?.orderItems?.find((item) => item?.product === productDetail?._id)
        if ((orderRedux?.amount + numProduct) <= productDetail?.countInStock || (!orderRedux && productDetail?.countInStock > 0)) {
            setErrorLimitOrder(false)
        } else if (productDetail?.countInStock === 0) {
            setErrorLimitOrder(true)
        }
    }, [numProduct])

    useEffect(() => {
        if (order.isSuccessOrder) {
            message.success('Thêm sản phẩm vào giỏ hàng thành công')
        }
        return () => {
            dispatch(resetOrder())
        }

    }, [order.isSuccessOrder])

    const handleChangeCount = (type, limit) => {
        if (type === 'increase') {
            if (!limit) {
                setNumProduct(numProduct + 1)
            }
        } else {
            if (!limit) {
                setNumProduct(numProduct - 1)
            }
        }
    }

    const { isLoading, data: productDetail } = useQuery(['products-detail', idProduct], fetchGetProductDetail, { enabled: !!idProduct })

    const handleAddToCart = () => {
        if (!user?.id) {
            navigate('/sign-in', { state: location?.pathname })
        } else {
            const orderRedux = order?.orderItems?.find((item) => item?.product === productDetail?._id)
            if ((orderRedux?.amount + numProduct) <= productDetail?.countInStock || (!orderRedux && productDetail?.countInStock > 0)) {
                dispatch(addToCart({
                    orderItem: {
                        name: productDetail?.name,
                        amount: numProduct,
                        image: productDetail?.image,
                        price: productDetail?.price,
                        product: productDetail?._id,
                        discount: productDetail?.discount,
                        countInStock: productDetail?.countInStock,

                    }
                }))
            } else {
                setErrorLimitOrder(true)
            }

        }
    }

    return (
        <Loading isLoading={isLoading}>
            <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px' }}>
                <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
                    <Image src={productDetail?.image} alt="image product" preview={false} />
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
                    <LikeButtonComponent
                        dataHref={process.env.REACT_APP_IS_LOCAL ? "https://developers.facebook.com/docs/plugins/" : window.location.href}
                    />
                    <div style={{ margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
                        <div style={{ marginBottom: '10px' }}>Số Lượng</div>
                        <WrapperQualityProduct>
                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('decrease', numProduct === 1)}>
                                <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>

                            <WrapperInputNumber onChange={onChange} defaultValue={1} min={1} max={productDetail?.countInStock} value={numProduct} size='small' />

                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('increase', numProduct === productDetail?.countInStock)} >
                                <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>

                        </WrapperQualityProduct>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div>
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
                                textbutton={'Chọn Mua'}
                                styleTextButton={{ color: '#fff', fontSize: '16px', fontWeight: 500 }}
                            ></ButtonComponent>
                            {errorLimitOrder && <div style={{ color: 'red' }}>Sản phẩm đã hêt hàng</div>}
                        </div>

                        <ButtonComponent
                            size={20}
                            styleButton={{
                                background: '#fff',
                                height: '48px',
                                width: '220px',
                                border: '1px solid rgb(13, 92, 182)',
                                borderRadius: '4px',
                            }}
                            textbutton={'Mua Trả Sau'}
                            styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '16px' }}
                        ></ButtonComponent>

                    </div>
                </Col>
                <CommentComponent
                    dataHref={process.env.REACT_APP_IS_LOCAL ? "https://developers.facebook.com/docs/plugins/comments#configurator" : window.location.href}
                    width="1270"
                    marginBottom="20px"
                />
            </Row>
        </Loading>

    )
}

export default ProductDetailsComponent