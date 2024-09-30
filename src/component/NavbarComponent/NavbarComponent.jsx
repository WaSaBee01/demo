import React from 'react'
import { WrapperContent, WrapperLable, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd';

const NavbarComponent = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((options) => {
                    return (
                        <WrapperTextValue>{options}</WrapperTextValue>
                    )
                })
            case 'checkbox':
                return (<Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                    {options.map((option) => {
                        return (
                            <Checkbox style={{ marginLeft: 0 }} value={option.value}>{option.label}</Checkbox>
                        )
                    })}
                </Checkbox.Group>
                )
            case 'star':
                return options.map((option) => {
                    console.log('check', option)
                    return (
                        <div style={{display: 'flex' }}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                            <span>{`tu ${option}`}</span>
                        </div>
                    )
                })
                case 'price':
                    return options.map((option) => {
                        
                        return (
                            <WrapperTextPrice>{option}</WrapperTextPrice>
                        )
                    })

            default:
                return <h1>Default</h1>
        }
    }
    return (
        <div >
            <WrapperLable>Lable</WrapperLable>
            <WrapperContent>
                {renderContent('text', ['TV', 'Laptop', 'Smartphone', 'Tablet', 'Watch', 'Camera', 'Headphone', 'Speaker', 'Printer', 'Monitor'])}

            </WrapperContent>
            {/* <WrapperContent>
                {renderContent('checkbox', [
                    { value: 'a', label: 'A' },
                    { value: 'b', label: 'B' },
                ])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('star', [5, 4, 3])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('price', ['duoi 40', 'tren 50'])}
            </WrapperContent> */}
        </div>
    )
}

export default NavbarComponent