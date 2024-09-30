import React from 'react'
import TypeProduct from '../../component/TypeProduct/TypeProduct'
import { WrapperButton, WrapperProducts, WrapperTypeProduct } from './style'
import SliderComponent from '../../component/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.png'
import slider2 from '../../assets/images/slider2.png'
import slider3 from '../../assets/images/slider3.png'
import CardComponent from '../../component/CardComponent/CardComponent'

const HomePage = () => {
  const arr = ['TV', 'Laptop', 'Smartphone', 'Tablet', 'Watch', 'Camera', 'Headphone', 'Speaker', 'Printer', 'Monitor']
  return (
    <>
      <div style={{ width: '1270', margin: '0 auto' }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return (
              <TypeProduct name={item} key={item} />
            )
          })}
        </WrapperTypeProduct>


      </div>
      <div className='body' style={{width: '100%', backgroundColor: '#efefef'}}>
        <div id="container" style={{ height: '1000px', width: '1270px', margin: '0 auto' }}>
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
        <WrapperProducts>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProducts>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
          <WrapperButton textButton="Xem Thêm" type="outline" styleButton={{
            border: '1px solid red', color: 'red', marginTop: '20px',
            width: '240px', height: '38px', borderRadius: '4px'
          }}
            styleTextButton={{ fontWeight: 500 }} />
        </div>
      </div>
      </div>
      
    </>
  )
}

export default HomePage