import React, { useEffect, useState } from 'react';
import { WrapperInfo, WrapperContainer, WrapperValue, WrapperItemOrder, WrapperItemOrderInfo } from './style';
import { useSelector } from 'react-redux';
import Loading from '../../component/LoadingComponent/Loading';
import { useLocation } from 'react-router-dom';
import { orderContant } from '../../contant';
import { convertPrice } from '../../utils';
import * as OrderService from '../../services/OrderService';
import * as message from '../../component/Message/Message';

const OrderSuccess = () => {
  const order = useSelector((state) => state.order);
  const location = useLocation();
  const { state } = location;

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const orderId = searchParams.get("orderId");

  const vnp_ResponseCode = searchParams.get('vnp_ResponseCode');
  const vnp_Amount = searchParams.get('vnp_Amount');
  const isVnpayCallback = !!vnp_ResponseCode;

  const urlPayment = searchParams.get('payment');
  const urlDelivery = searchParams.get('delivery');
  const urlTotalPrice = searchParams.get('totalPrice');

  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔥 Xóa localStorage sau khi load xong
  useEffect(() => {
    if (isVnpayCallback) {
      localStorage.removeItem('vnpay_delivery');
      localStorage.removeItem('vnpay_payment');
      localStorage.removeItem('vnpay_totalPrice');
    }
  }, [isVnpayCallback]);

  useEffect(() => {
    if (vnp_ResponseCode) {
      if (vnp_ResponseCode === '00') {
        message.success('Thanh toán VNPay thành công!');
      } else if (vnp_ResponseCode === '24') {
        message.error('Giao dịch đã bị hủy bỏ');
      } else {
        message.error('Thanh toán VNPay thất bại');
      }
    }

    const fetchOrder = async () => {
      if (orderId && !state?.orders) {
        setLoading(true);
        try {
          const res = await OrderService.getOrderById(orderId);
          if (res?.data) {
            setOrderData(res.data);
            console.log('Fetched order data:', res.data);
          }
        } catch (error) {
          console.error("Failed to fetch order by ID:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchOrder();
  }, [orderId, state?.orders, vnp_ResponseCode]);

  // 🔷 Ưu tiên data
  let orders = state?.orders || orderData?.orderItems || [];
  let totalPrice = state?.totalPriceMemo || orderData?.totalPrice || (urlTotalPrice ? Number(urlTotalPrice) : null);

  // 🔷 Xử lý delivery và payment
  let delivery, payment;

  if (isVnpayCallback) {
    payment = 'vnpay';

    delivery = (urlDelivery && urlDelivery !== 'null') ? urlDelivery :
               localStorage.getItem('vnpay_delivery') ||
               state?.delivery ||
               orderData?.deliveryMethod ||
               orderData?.shippingAddress?.deliveryMethod ||
               orderData?.shippingAdress?.deliveryMethod ||
               null;

    if (vnp_Amount && !totalPrice) {
      totalPrice = vnp_Amount / 100;
    }
    if (!totalPrice) {
      totalPrice = localStorage.getItem('vnpay_totalPrice');
    }
  } else {
    delivery = state?.delivery ||
               orderData?.deliveryMethod ||
               orderData?.shippingAddress?.deliveryMethod ||
               orderData?.shippingAdress?.deliveryMethod ||
               urlDelivery ||
               null;

    payment = state?.payment || orderData?.paymentMethod || urlPayment || null;
  }

  // 🔎 Debug
  console.log('OrderSuccess Debug:', {
    delivery,
    payment,
    totalPrice,
    orders: orders.length,
    isVnpayCallback
  });

  return (
    <div style={{ background: '#fff', width: '100%', minHeight: '100vh' }}>
      <Loading isLoading={loading}>
        <div style={{ width: '1270px', margin: '0 auto', paddingTop: '20px' }}>
          <h2>Đặt hàng thành công</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <WrapperContainer>
              <WrapperInfo>
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', fontWeight: 'bold' }}>
                    Phương thức giao hàng
                  </label>
                  <WrapperValue>
                    <span style={{ color: '#ea8500', fontWeight: 'bold' }}>
                      {delivery ? (orderContant.delivery[delivery] || delivery.toUpperCase()) : 'Không xác định được phương thức giao hàng'}
                    </span>
                  </WrapperValue>
                </div>
              </WrapperInfo>

              <WrapperInfo>
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', fontWeight: 'bold' }}>
                    Phương thức thanh toán
                  </label>
                  <WrapperValue>
                    {payment ? (orderContant.payment[payment] || payment.toUpperCase()) : 'Không xác định được phương thức thanh toán'}
                  </WrapperValue>
                </div>
              </WrapperInfo>

              <WrapperItemOrderInfo>
                {orders.map((order) => (
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
                ))}
              </WrapperItemOrderInfo>

              <div>
                <span style={{ fontSize: '16px', color: 'rgb(254, 56, 52)' }}>
                  Tổng tiền: {totalPrice ? convertPrice(totalPrice) : 'Chưa xác định'}
                </span>
              </div>
            </WrapperContainer>
          </div>
        </div>
      </Loading>
    </div>
  );
};

export default OrderSuccess;
