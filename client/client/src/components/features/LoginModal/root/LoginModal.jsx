import React from "react";
import { Button, Modal, Divider } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLOSE_MODAL } from "../../../../redux/actions-types/actions-types";
import { Link } from "react-router-dom";
import styles from "./LoginModal.module.css";

const LoginModal = ({ open }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const handleOnRegister = () => {
    console.log("Boton de registrarse presionado");
  };

  return (
    <div>
      <div>
        <Modal
          className={styles.title}
          open={open}
          title="¿Quieres acceder a esta funcionalidad?"
          centered
          onOk={handleOnRegister}
          onCancel={handleCancel}
          footer={[
            <Button
              className={styles.secondaryButton}
              key="back"
              onClick={handleCancel}
            >
              Cancelar
            </Button>,
            <Link to={"/account/create"}>
              <Button
                className={styles.primaryButton}
                key="submit"
                type="primary"
                loading={loading}
                onClick={handleCancel}
              >
                Ir a registrarse
              </Button>
            </Link>,
            <Link to={"/login"}>
              <Button
                className={styles.primaryButton}
                key="link"
                type="primary"
                loading={loading}
                onClick={handleCancel}
              >
                Ir a iniciar sesion
              </Button>
            </Link>,
          ]}
        >
          <p className={styles.text}>
            Te invitamos a registrarte para acceder a todas la funcionalidades
            de nuestra pagina!
          </p>
        </Modal>
      </div>

      <Divider type="vertical" />

      <div></div>
    </div>
  );
};

export default LoginModal;
