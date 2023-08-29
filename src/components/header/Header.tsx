import { GlobalOutlined } from "@ant-design/icons";
import {
  Button,
  Dropdown,
  Input,
  Layout,
  Menu,
  MenuProps,
  Typography,
} from "antd";
import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <a>中文</a>,
  },
  {
    key: "2",
    label: <a>English</a>,
  },
];

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["app-header"]}>
      {/* top-header */}
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown menu={{ items }}>
            <Button style={{ marginLeft: 15 }} icon={<GlobalOutlined />}>
              语言
            </Button>
          </Dropdown>
          <Button.Group className={styles["button-group"]}>
            <Button onClick={() => navigate("/signIn")}>注册</Button>
            <Button onClick={() => navigate("/register")}>登陆</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles["main-header"]}>
        <img src={logo} alt="logo" className={styles["App-logo"]} />
        <Typography.Title level={3} className={styles.title}>
          React旅游网
        </Typography.Title>
        <Input.Search
          placeholder={"请输入旅游目的地、主题、或关键字"}
          className={styles["search-input"]}
        />
      </Layout.Header>
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
        <Menu.Item key={1}>旅游首页</Menu.Item>
        <Menu.Item key={2}>周末游</Menu.Item>
        <Menu.Item key={3}>跟团游</Menu.Item>
        <Menu.Item key="4"> 自由行 </Menu.Item>
        <Menu.Item key="5"> 私家团 </Menu.Item>
        <Menu.Item key="6"> 邮轮 </Menu.Item>
        <Menu.Item key="7"> 酒店+景点 </Menu.Item>
        <Menu.Item key="8"> 当地玩乐 </Menu.Item>
        <Menu.Item key="9"> 主题游 </Menu.Item>
        <Menu.Item key="10"> 定制游 </Menu.Item>
        <Menu.Item key="11"> 游学 </Menu.Item>
        <Menu.Item key="12"> 签证 </Menu.Item>
        <Menu.Item key="13"> 企业游 </Menu.Item>
        <Menu.Item key="14"> 高端游 </Menu.Item>
        <Menu.Item key="15"> 爱玩户外 </Menu.Item>
        <Menu.Item key="16"> 保险 </Menu.Item>
      </Menu>
    </div>
  );
};
