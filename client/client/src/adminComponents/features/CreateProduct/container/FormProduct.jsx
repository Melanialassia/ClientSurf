//hooks
import React from 'react';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
//librarys
import { Input, Form, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
//components
//style-sheets
import styles from './FormProduct.module.css';



const FormProduct = () => {

    const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      };

    const [dataProduct, setDataProduct] = useState({

        idCategory: [],
        name: "",
        image: "",
        colors: [],
        nameBrand: [],
        priceProduct: 0,
        stock: 0,
        description: ""

    });

    const [errors, setErrors] = useState({});
   
    useDispatch(() => {}, [])

  return (
    <div>
        <h4 style={{marginTop: "80px", fontSize: "30px", }} className={styles.text}>Crear Producto</h4>
        <Form>
    <Form.Item
      label="Nombre"
      name="Input"
      style={{
        marginTop: "150px",
        width: "50%"
      }}
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item label="Imagen" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>

    
        <Form.Item
      label="Precio"
      name="InputNumber"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
  <input type="number" name="Precio" 
  style={{
    width: '48%',
  }}/>
    </Form.Item>

    <Form.Item
      label="Stock"
      name="InputNumber"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
  <input type="number" name="Stock" 
  style={{
    width: '48%',
  }}/>
    </Form.Item>

    <Form.Item
      label="Descripción"
      name="TextArea"
      style={{
        width: '50%',
      }}
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Input.TextArea />
    </Form.Item>


    </Form>
    </div>
  )
}

export default FormProduct