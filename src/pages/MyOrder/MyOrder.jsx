
import React from 'react'
import * as OrderService from '../../services/OrderService'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../component/LoadingComponent/Loading'
import { useSelector } from 'react-redux'


const MyOrder = () => {
  const user = useSelector((state) => state.user)
  const fetchMyOrder = async () => {
    const res = await OrderService.getOrderbyUserId(user?.id, user?.access_token)
    return res.data
  }
  const queryOrder = useQuery({ queryKey: ['orders'], queryFn: fetchMyOrder }, {
    enabled: user?.id && user?.access_token
  })
  const { isLoading, data } = queryOrder
  console.log('data', data)
  return (
    <Loading isLoading={isLoading}>
      <div style={{ background: '#fff', width: '100%', height: '100vh' }}>
        Myorder
      </div>
    </Loading>

  )
}

export default MyOrder