import axios from "axios";

export const getConfig = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/payment/config`
  );
  return res.data;
};

export const createVnpayOrder = async (orderData) => {
  // Nếu có token thì truyền vào header
  const config = orderData.token
    ? { headers: { Authorization: `Bearer ${orderData.token}` } }
    : {};
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/vnpay`,
    orderData,
    config
  );
  console.log("VNPAY ORDER RES:", res);
  return res.data;
};
