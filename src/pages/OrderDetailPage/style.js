import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #f5f5fa;
`;

export const WrapperHeaderUser = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 10px;
`;

export const WrapperInfoUser = styled.div`
    flex: 1;
    background: #fff;
    border-radius: 8px;
    padding: 15px;
    margin-right: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const WrapperLabel = styled.div`
    font-weight: bold;
    color: #666;
    margin-bottom: 10px;
`;

export const WrapperContentInfo = styled.div`
    .name-info, .address-info, .phone-info, .delivery-info, .payment-info {
        font-size: 16px;
        color: #333;
        margin-bottom: 5px;
    }

    .name-delivery {
        color: #ff8000;
        font-weight: bold;
    }

    .status-payment {
        color: #ff8000;
        font-weight: bold;
    }
`;

export const WrapperStyleContent = styled.div`
    margin-top: 20px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;


export const WrapperProduct = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding: 10px;
    border-bottom: 1px solid #ddd;
`;

export const WrapperNameProduct = styled.div`
    display: flex;
    align-items: center;
    width: 610px;
`;


export const WrapperItem = styled.div`
    width: 200px;
    font-weight: bold;
    &:last-child {
        color: red;
    }
`
export const WrapperItemBabel = styled.div`
    width: 200px;
    &:last-child {
        font-weight: bold;
    }
`;

export const WrapperPrice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`