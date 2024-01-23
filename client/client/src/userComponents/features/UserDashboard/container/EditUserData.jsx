//HOOKS
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
//LIBRARYS
import { Button, Form, Input } from "antd";
//REDUX
import { updateUser } from "../../../../redux/actions/action";
//CONSTANTS
import {
  saveChanges,
  editPersonalData,
  iDontWantChangePassword,
  iWantToChangePassword,
} from "../utils/constants";
//STYLE-SHEETS
import styles from "./EditUserData.module.css";

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

  // CASO 2 DONDE NO QUIERE CAMBIAR PASSWORD
  const [dataPassword, setDataPassword] = useState({
    idLevel: userData.idLevel,
    idUser: userData.idUser,
    nameUser: userData.nameUser,
    emailUser: userData.emailUser,
    uniqueId: userData.uniqueId,
  });

  const onChangeOption = (event) => {
    const optionButton = event.target.name;
    if (optionButton === "password") {
      setFlag("password");
    } else if (optionButton === "uniqueId") {
      setFlag("unique");
    }
  };

  const handleSubmit = () => {
    if (flag === "password") {
      dispatch(updateUser(dataUnique));
    } else if (flag === "unique") {
      dispatch(updateUser(dataPassword));
    }
  };

  const readUpdate = (value, name) => {
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
    <div>
      <h4 className={styles.text}>{editPersonalData}</h4>
      <Form
        initialValues={{
          user: {
            nameUser: userData.nameUser,
            emailUser: userData.emailUser,
          },
        }}
        {...layout}
        className={styles.container}
        name="nest-messages"
        onFinish={handleSubmit}
        style={{
          marginTop: "80px",
          marginRight: "400px",
          maxWidth: 600,
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "nameUser"]}
          label="Nombre"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            onChange={(event) => readUpdate(event.target.value, "nameUser")}
          />
        </Form.Item>

        <Form.Item
          name={["user", "emailUser"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input
            onChange={(event) => readUpdate(event.target.value, "emailUser")}
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
              onChange={(event) => readUpdate(event.target.value, "password")}
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

      <button name="password" onClick={onChangeOption}>
        {iWantToChangePassword}
      </button>

      <button name="uniqueId" onClick={onChangeOption}>
        {iDontWantChangePassword}
      </button>
    </div>
  );
};

export default EditUserData;
