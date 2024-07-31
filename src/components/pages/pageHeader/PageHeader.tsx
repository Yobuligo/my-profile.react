import { LanguageSelect } from "../../languageSelect/LanguageSelect";
import { IPageHeaderProps } from "./IPageHeaderProps";
import styles from "./PageHeader.module.scss";

export const PageHeader: React.FC<IPageHeaderProps> = (props) => {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.select}>
        <LanguageSelect />
      </div>
    </header>
  );
};
