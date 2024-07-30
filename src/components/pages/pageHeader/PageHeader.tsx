import { Select } from "../../select/Select";
import { IPageHeaderProps } from "./IPageHeaderProps";
import styles from "./PageHeader.module.scss";

export const PageHeader: React.FC<IPageHeaderProps> = (props) => {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.select}>
        <Select
          options={[
            { key: "de", text: "Deutsch" },
            { key: "en", text: "English" },
          ]}
          selected={{ key: "en", text: "English" }}
        />
      </div>
    </header>
  );
};
