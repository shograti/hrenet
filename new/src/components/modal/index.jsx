import  { forwardRef, useImperativeHandle, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Modal = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState({ message: "", path: "/" });

  const show = (newProps) => {
    setTitle(newProps.title);
    setMessage(newProps.message);
    setLink(newProps.link);
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };

  useImperativeHandle(ref, () => ({
    show,
    hide,
  }));

  if (!isVisible) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.title_container}>
          <h2>{title}</h2>
        </div>
        <div className={styles.close_icon_container} onClick={hide}>
          &#10006;
        </div>
        <p className={styles.message}>{message}</p>
        <Link to={link.path}>{link.message}</Link>
      </div>
    </div>
  );
});

export default Modal;
