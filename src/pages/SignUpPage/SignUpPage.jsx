import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../component/InputForm/InputForm'
import ButtonComponent from '../../component/ButtonComponent/ButtonComponent'
import logo from '../../assets/images/logologin.png'
import { Image } from 'antd'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.53)', height: '100vh' }}>
      <div style={{ width: '800px, height: 445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chao</h1>
          <p>Đăng nhập hoặc Tạo tài khoản</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" />

          <div style={{ position: 'relative' }}>
            <span style={{
              zIndex: 10,
              position: 'absolute',
              top: '4px',
              right: '8px'
            }}
            >{
                isShowPassword ? (
                  < EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm style={{ marginBottom: '10px' }} placeholder="password" />
          </div>

          <div style={{position: 'relative'}}>
          <span style={{
            zIndex: 10,
            position: 'absolute',
            top: '4px',
            right: '8px'
          }}
          >{
            isShowConfirmPassword ?(
              < EyeFilled/>
            ) : (
              <EyeInvisibleFilled/>
            )
          }
          </span>
            <InputForm placeholder="confirm password" />
          </div>


          <ButtonComponent
            size={20}
            styleButton={{
              background: 'rgb(255, 57, 69)',
              height: '48px',
              width: '100%',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px',
            }}
            textButton={'Đăng nhập'}
            styleTextButton={{ color: '#fff', fontSize: '16px', fontWeight: 500 }}
          ></ButtonComponent>

          <p>Đã có tài khoản? <WrapperTextLight>Đăng nhập</WrapperTextLight></p>

        </WrapperContainerLeft>

        <WrapperContainerRight>
          <Image src={logo} preview={false} alt="image-logo" height="203px" width="203px" />
          <h4>Mua sắm tại TechShop</h4>
          <span>muamuamuamuamuamua</span>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage