import { Card } from "../../../components/card/Card";
import { CalendarIcon } from "../../../icons/CalendarIcon";
import { DateTime } from "../../../services/date/DateTime";
import { RoleList } from "../../role/roleList/RoleList";
import { IProjectItemProps } from "./IProjectItemProps";
import styles from "./ProjectItem.module.scss";

export const ProjectItem: React.FC<IProjectItemProps> = (props) => {
  return (
    <Card className={styles.projectItem} onClick={props.onSelect}>
      <RoleList roles={props.project.roles} />
      <div className={styles.header}>
        <h3>{props.project.title}</h3>
      </div>
      {props.project.summary}
      <div className={styles.footer}>
        <CalendarIcon />
        {DateTime.toDate(props.project.timeInterval.from)}
      </div>
    </Card>
  );
};
