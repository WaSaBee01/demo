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
                                        <WrapperItemOrder key={order?.name}>
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <img
                                                    src={order?.image}
                                                    alt='img'
                                                    style={{
                                                        width: '77px',
                                                        height: '79px',
                                                        objectFit: 'cover',
                                                        marginRight: '10px'
                                                    }}
                                                />
                                                <div style={{
                                                    width: '260px',
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis',
                                                    fontSize: '14px'
                                                }}>
                                                    {order?.name}
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                                <span style={{ fontSize: '13px', color: '#242424' }}>
                                                    Giá tiền: {convertPrice(order?.price)}
                                                </span>
                                                <span style={{ fontSize: '13px', color: '#242424' }}>
                                                    Số lượng: {order?.amount}
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