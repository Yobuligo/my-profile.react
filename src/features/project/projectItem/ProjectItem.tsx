import { Card } from "../../../components/card/Card";
import { style } from "../../../core/utils/style";
import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { CalendarIcon } from "../../../icons/CalendarIcon";
import { ReactLogo } from "../../../icons/logos/ReactLogo";
import { TypeScriptLogo } from "../../../icons/logos/TypeScriptLogo";
import { DateTime } from "../../../services/date/DateTime";
import { RoleList } from "../../role/roleList/RoleList";
import { IProjectItemProps } from "./IProjectItemProps";
import styles from "./ProjectItem.module.scss";

export const ProjectItem: React.FC<IProjectItemProps> = (props) => {
  const { t } = useTranslation();

  return (
    <Card
      className={style(styles.projectItem, props.className)}
      onClick={props.onSelect}
    >
      <div>
        <RoleList className={styles.roleList} roles={props.project.roles} />
        <h3>{props.project.title}</h3>
        {props.project.summary}
      </div>

      <div className={styles.footer}>
        <div className={styles.technologies}>
          <div className={styles.technologiesHeader}>
            {t(texts.projectItem.technologies)}
          </div>
          <div className={styles.logos}>
            <ReactLogo className={styles.logo} />
            <TypeScriptLogo className={styles.logo} />
          </div>
        </div>
        <div className={styles.date}>
          <CalendarIcon />
          {DateTime.toYear(props.project.timeInterval.from)}
        </div>
      </div>
    </Card>
  );
};
