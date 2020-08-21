import React from 'react';
import './FormLeads.scss';
import { Form, Input, Button, notification } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
}

const FormLeads = () =>  {

    const history = useHistory();
    
    const onFinish = (event) => {

        const TOKEN = "00D5J000000nLCV!ARUAQHsTVqBex65MLGalOjQ5Xz253ZfNvxSfoPAhfi_7wSwEOkxqeVw0AtvmSmZ_3LF49kyIEIlVdaIezKhUpxnryw03PmhM";
        
        console.log(event);

        axios.post('https://ganaenergia.my.salesforce.com/services/apexrest/v1/Subscriptions/prueba', event, {
  
            headers: { Authorization: `Bearer ${TOKEN}`}
  
          })
  
              .then(() => {
  
                  notification.success({ message: 'Datos enviados' });
                  history.push('/')
  
              })
              .catch(console.error)
       
            //   event.Lastname = "";
            //   event.PersonalEmail = "";
            //   event.PersonMobilePhone = "";
        
      }

    return (

        <section className="FormMain">
            
            <div className="Form FormLeft">

                <img src="/images/gana-ahorro.png" alt=""/>

            </div>

            <div className="Form FormRight">

                                <Form 
                        className="FormLogin"
                        {...layout}
                        onFinish={onFinish}
                        onFinishFailed={console.error} >
                        <Form.Item
                            label="Nombre"
                            name="Lastname"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="PersonalEmail"
                            rules={[{ required: true, message: 'El email es requerido' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Telefono"
                            name="PersonMobilePhone"
                            rules={[{ required: true, message: 'El telefono es requerido' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button className="ButtonRegister" type="primary" htmlType="submit">
                                Pronto te llamaremos
                            </Button>
                        </Form.Item>
                    </Form>


            </div>
            
            
        </section>
    )
}

export default FormLeads;
