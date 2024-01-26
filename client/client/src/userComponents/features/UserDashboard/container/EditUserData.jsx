//HOOKS
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
//LIBRARYS

import { Button, Form, Input, Card } from "antd";
//REDUX
import { updateUser, getIdUser } from "../../../../redux/actions/action";
//CONSTANTS
import { saveChanges, editPersonalData } from "../utils/constants";

//STYLE-SHEETS
import styles from "./EditUserData.module.css";

const { Meta } = Card;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const EditUserData = () => {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const [flag, setFlag] = useState("password");

  // CASO 1 DONDE QUIERE CAMBIAR SU PASSWORD
  const [dataUnique, setDataUnique] = useState({
    idUser: userData.idUser,
    nameUser: userData.nameUser,
    emailUser: userData.emailUser,
    idLevel: userData.idLevel,
    uniqueId: userData.uniqueId,
    password: "",
  });
// console.log("estado", dataUnique);
  // CASO 2 DONDE NO QUIERE CAMBIAR PASSWORD
  const [dataPassword, setDataPassword] = useState({
    idLevel: userData.idLevel,
    idUser: userData.idUser,
    nameUser: userData.nameUser,
    emailUser: userData.emailUser,
    uniqueId: userData.uniqueId,
  });
  console.log("estado", dataPassword);

  const onChangeOption = (event) => {
    const optionButton = event.target.name;
    if (optionButton === "password") {
      setFlag("password");
    } else if (optionButton === "uniqueId") {
      setFlag("unique");
    }
  };

  const handleSubmit = async () => {
    if (flag === "password") {
      

      
      await dispatch(updateUser(dataUnique));
      
    } else if (flag === "unique") {
      console.log("orto",dataPassword);
      await dispatch(updateUser(dataPassword));
    }
    dispatch(getIdUser(userData.idUser));
  };



  const readUpdate = (name, value) => {
    if (flag === "unique") {
      setDataPassword({
        ...dataPassword,
        [name]: value,
      });
    }
    if (flag === "password") {
      setDataUnique({
        ...dataUnique,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    if (flag === "password") {
      setDataUnique({
        idUser: userData.idUser,
        nameUser: userData.nameUser,
        emailUser: userData.emailUser,
        idLevel: userData.idLevel,
        uniqueId: userData.uniqueId,
        password: "",
      });
    } else {
      setDataPassword({
        idLevel: userData.idLevel,
        idUser: userData.idUser,
        nameUser: userData.nameUser,
        emailUser: userData.emailUser,
        uniqueId: userData.uniqueId,
      });
    }
  }, [flag]);

  return (

    // <Card
    // hoverable
    // style={{
    //   width: 550,
    //   height: 400,
    //   margin: "10px",
    //   padding: "0",
    //   borderRadius: "2rem",
    //   marginRight: "150px"
    // }}
    // className={styles.firstHeadline}

    // >
    <div   className={styles.container}>
      <h4 className={styles.text}>{editPersonalData}</h4>
      <Form
        initialValues={userData}
        {...layout}
      
        name="nest-messages"
        onFinish={handleSubmit}
        style={{

          marginTop: "-20px",
          marginLeft: "50px",
          width: 350

        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="nameUser"
          label="Nombre"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            onChange={(event) => readUpdate("nameUser", event.target.value )}
          />
        </Form.Item>

        <Form.Item
          name="emailUser"
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input
            onChange={(event) => readUpdate("emailUser", event.target.value )}
          />
        </Form.Item>

        {flag === "password" && (
          <Form.Item
            name="password"
            label="Contraseña"
            rules={[
              {
                required: true,
                message: "Ingresa tu contraseña!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              onChange={(event) => readUpdate("password",event.target.value)}
            />
          </Form.Item>
        )}

        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            {saveChanges}
          </Button>
        </Form.Item>
      </Form>
      <button onClick={onChangeOption} name="password">Cambiar mi contraseña</button>
      <button onClick={onChangeOption} name="uniqueId">Mantener mi contraseña actual</button>


    </div>
    // </Card>
  );
};

export default EditUserData;
