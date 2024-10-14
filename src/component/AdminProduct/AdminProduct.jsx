import React, { useEffect, useState } from 'react'
import { WrapperHeader } from './style'
import { Button, Form, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import TableComponent from '../TableComponent/TableComponent'
import Inputcomponent from '../InputComponent/Inputcomponent'
import { getBase64 } from '../../utils'
import { WrapperUploadFile } from './style'
import * as ProductService from '../../services/ProductService'
import { useMutationHook } from '../../hooks/useMutationHook'
import Loading from '../LoadingComponent/Loading'
import * as message from '../../component/Message/Message'


const AdminProduct = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [stateProduct, setStateProduct] = useState({
        name: '',
        price: '',
        description: '',
        rating: '',
        image: '',
        type: '',
        countInStock: '',
    })

    const mutation = useMutationHook(
        (data) => {
            const { name,
                price,
                description,
                rating,
                image,
                type,
                countInStock: countInStock 
            } = data

            const res = ProductService.createProduct(
               { name,
                price,
                description,
                rating,
                image,
                type,
                countInStock}
            )
            return res
        }
    )

    const { data,isLoading , isSuccess, isError } = mutation

    useEffect(() =>{
        if(isSuccess && data?.status === 'OK'){
            message.success()
            handleCancel()
        }else if(isError){
            message.error()
        }
    }, [isSuccess])

    const handleCancel = () => {
        setIsModalOpen(false);
        setStateProduct({
            name: '',
            price: '',
            description: '',
            rating: '',
            image: '',
            type: '',
            countInStock: '',
        })
    };

    const onFinish = () => {
        mutation.mutate(stateProduct)
    }

    const handleOnchange = (e) => {
        setStateProduct({
            ...stateProduct,
            [e.target.name]: e.target.value
        })
    }

    const handleOnChangeAvatar = async ({ fileList }) => {
        const file = fileList[0]
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setStateProduct({
            ...stateProduct,
            image: file.preview
        })

    }

    return (
        <div>
            <WrapperHeader>Quản lý sản phẩm</WrapperHeader>
            <div style={{ marginTop: ' 10px' }}>
                <Button style={{ height: '150px', width: '150px', borderRadius: '6px', borderStyle: 'dashed' }} onClick={() => setIsModalOpen(true)}><PlusOutlined />Add</Button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <TableComponent />
            </div>
            <Modal title="Tạo sản phẩm" open={isModalOpen} onCancel={handleCancel} okText=''>
                <Loading isLoading={isLoading}>
                    <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="Name"
                        rules={[{ required: true, message: 'Please input product name!' }]}
                    >
                        <Inputcomponent value={stateProduct.name} onChange={handleOnchange} name="name" />
                    </Form.Item>

                    <Form.Item
                        label="Type"
                        name="Type"
                        rules={[{ required: true, message: 'Please input product type!' }]}
                    >
                        <Inputcomponent value={stateProduct.type} onChange={handleOnchange} name="type" />
                    </Form.Item>

                    <Form.Item
                        label="Count in Stock"
                        name="Count in Stock"
                        rules={[{ required: true, message: 'Please input stock!' }]}
                    >
                        <Inputcomponent value={stateProduct.countInStock} onChange={handleOnchange} name="countInStock" />
                    </Form.Item>

                    <Form.Item
                        label="Price"
                        name="Price"
                        rules={[{ required: true, message: 'Please input product price!' }]}
                    >
                        <Inputcomponent value={stateProduct.price} onChange={handleOnchange} name="price" />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="Description"
                        rules={[{ required: true, message: 'Please input product description!' }]}
                    >
                        <Inputcomponent value={stateProduct.description} onChange={handleOnchange} name="description" />
                    </Form.Item>

                    <Form.Item
                        label="Rating"
                        name="rating"
                        rules={[{ required: true, message: 'Please input product rating!' }]}
                    >
                        <Inputcomponent value={stateProduct.rating} onChange={handleOnchange} name="rating" />
                    </Form.Item>

                    <Form.Item
                        label="Image"
                        name="image"
                        rules={[{ required: true, message: 'Please input product image!' }]}
                    >
                        <WrapperUploadFile onChange={handleOnChangeAvatar} maxCount={1}>
                            <Button>Select File</Button>
                            {stateProduct?.image && (
                                <img src={stateProduct?.image} style={{
                                    height: '60px',
                                    width: '60px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    marginLeft: '10px'
                                }} alt="avatar" />
                            )}
                        </WrapperUploadFile>
                    </Form.Item>


                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                </Loading>
                
            </Modal>
        </div>
    )
}

export default AdminProduct