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
    const onFinish = user => {
        axios.post('esperando_token_', user)
            .then(() => {
                notification.success({ message: 'Datos enviados' });
                history.push('/')
            })
            .catch(console.error)
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
                            name="name"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'El email es requerido' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Telefono"
                            name="telefono"
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
