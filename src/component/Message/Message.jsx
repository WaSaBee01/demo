import { message } from "antd";

const success = (mes = 'Success') => {
    message.success('Success');
  };
  
  const error = (mes = 'Error') => {
    message.error('Error');
  };
  
  const warning = (mes ='Warning') => {
    message.warning('This is a warning message');
  };

  export {success, error, warning}