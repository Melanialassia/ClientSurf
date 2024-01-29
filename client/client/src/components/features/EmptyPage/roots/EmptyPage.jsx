import React from "react";
import { Button, Empty } from "antd";
import { Link } from "react-router-dom";
import styles from "./EmptyPage.module.css"

const EmptyPage = () => {
  return (
    <div className={styles.container}>
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{ height: 60 }}
        description={<span className={styles.errorText} >No tienes productos agregados</span>}
      >
        <Link to="/products">
          <Button className={styles.button} type="primary">Ver productos</Button>
        </Link>
      </Empty>
    </div>
  );
};

export default EmptyPage;
