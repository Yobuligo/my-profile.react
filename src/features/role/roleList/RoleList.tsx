import { RoleItem } from "../roleItem/RoleItem";
import { IRoleListProps } from "./IRoleListProps";
import styles from "./RoleList.module.scss";

export const RoleList: React.FC<IRoleListProps> = (props) => {
  const items = props.roles.map((role, index) => (
    <RoleItem key={index} role={role} />
  ));

  return <div className={styles.roleList}>{items}</div>;
};
