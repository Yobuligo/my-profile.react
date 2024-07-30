import styles from "./Button.module.scss";
import { IButtonProps } from "./IButtonProps";

export const Button: React.FC<IButtonProps> = (props) => {
  return <button className={styles.button} {...props} />;
};
