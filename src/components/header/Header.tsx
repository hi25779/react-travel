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
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { change } from "../../redux/languageSlice";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const languageValue = useAppSelector((state) => state.language);

  const menuClickHandler = (e) => {
    console.log(e);
    dispatch(change({ value: e.key }));
  };

  const items: MenuProps["items"] = languageValue.languageList.map((i) => {
    return { key: i.code, label: <a>{i.name}</a> };
  });

  // const items: MenuProps["items"] = [
  //   {
  //     key: "1",
  //     label: <a>中文</a>,
  //   },
  //   {
  //     key: "2",
  //     label: <a>English</a>,
  //   },
  // ];

  return (
    <div className={styles["app-header"]}>
      {/* top-header */}
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>{t("header.slogan")}</Typography.Text>
          <Dropdown menu={{ items, onClick: menuClickHandler }}>
            <Button style={{ marginLeft: 15 }} icon={<GlobalOutlined />}>
              {languageValue.language == "zh" ? "中文" : "English"}
            </Button>
          </Dropdown>
          <Button.Group className={styles["button-group"]}>
            <Button onClick={() => navigate("/register")}>
              {t("header.register")}
            </Button>
            <Button onClick={() => navigate("/signInregister")}>
              {t("header.signin")}
            </Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles["main-header"]}>
        <img src={logo} alt="logo" className={styles["App-logo"]} />
        <Typography.Title level={3} className={styles.title}>
          React旅游网
        </Typography.Title>
        <Input.Search
          placeholder={
            languageValue.language == "zh"
              ? "请输入旅游目的地、主题、或关键字"
              : "Please input key word"
          }
          className={styles["search-input"]}
        />
      </Layout.Header>
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
        <Menu.Item key={1}>{t("header.home_page")}</Menu.Item>
        <Menu.Item key={2}>{t("header.weekend")}</Menu.Item>
        <Menu.Item key={3}>{t("header.group")}</Menu.Item>
        <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
        <Menu.Item key="5"> {t("header.private")} </Menu.Item>
        <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
        <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
        <Menu.Item key="8"> {t("header.local")} </Menu.Item>
        <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
        <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
        <Menu.Item key="11"> {t("header.study")} </Menu.Item>
        <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
        <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
        <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
        <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
        <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
      </Menu>
    </div>
  );
};
