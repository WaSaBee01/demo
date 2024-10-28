import React from 'react'
import { WrapperInfo, WrapperContainer, WrapperValue, WrapperCountOrder, WrapperItemOrder, WrapperItemOrderInfo } from './style'
import { useSelector } from 'react-redux'
import Loading from '../../component/LoadingComponent/Loading'
import { useLocation } from 'react-router-dom'
import { orderContant } from '../../contant'
import { convertPrice } from '../../utils'


const OrderSuccess = () => {
    const order = useSelector((state) => state.order)
    const location = useLocation()
    const { state } = location
    console.log('location', location)
    return (
        <div style={{ background: '#fff', width: '100%', height: '100vh' }}>
            <Loading isLoading={false}>
                <div style={{ height: '100%', width: '1270px', margin: '0 auto' }}>
                    <h2>Đặt thành công</h2>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <WrapperContainer>
                            <WrapperInfo>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', fontWeight: 'bold' }}> Phương thức giao hàng</label>
                                    <WrapperValue >
                                        <span style={{ color: '#ea8500', fontWeight: 'bold' }}>{orderContant.delivery[state?.delivery]}</span> Giao hàng tiết kiệm
                                    </WrapperValue>
                                </div>
                            </WrapperInfo>
                            <WrapperInfo>
                                <div >
                                    <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', fontWeight: 'bold' }}>Phương thức thanh toán</label>
                                    <WrapperValue>
                                        {orderContant.payment[state?.payment]}
                                    </WrapperValue>
                                </div>
                            </WrapperInfo>
                            <WrapperItemOrderInfo>
                                {state.orders?.map((order) => {
                                    return (
                                        <WrapperItemOrder>
                                            <div style={{ width: '500px', display: 'flex', alignItems: 'center', gap: 4 }}>
                                                <img src={order?.image} style={{ width: '77px', height: '79px', objectFit: 'cover' }} alt='img' />
                                                <div style={{
                                                    width: '260px',
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis'
                                                }}>{order?.name}</div>
                                            </div>
                                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <span>
                                                    <span style={{ fontSize: '13px', color: '#242424' }}>Giá tiền: {convertPrice(order?.price)}</span>
                                                </span>
                                                <span>
                                                    <span style={{ fontSize: '13px', color: '#242424' }}>Số lượng: {convertPrice(order?.amount)}</span>
                                                </span>

                                            </div>
                                        </WrapperItemOrder>
                                    )
                                })}

                            </WrapperItemOrderInfo>
                            <div>
                                <span style={{ fontSize: '16px', color: 'rgb(254, 56, 52)' }}>Tổng tiền: {convertPrice(state?.totalPriceMemo)}</span>
                            </div>
                        </WrapperContainer>

                    </div>
                </div>

            </Loading>

        </div>
    )
}

export default OrderSuccess