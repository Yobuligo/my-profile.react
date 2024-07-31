import { AppLogo } from "../../../icons/logos/AppLogo";
import { LanguageSelect } from "../../languageSelect/LanguageSelect";
import { IPageHeaderProps } from "./IPageHeaderProps";
import styles from "./PageHeader.module.scss";

export const PageHeader: React.FC<IPageHeaderProps> = (props) => {
  return (
    <header className={styles.pageHeader}>
      <div>
        <AppLogo className={styles.appLogo} />
      </div>
      <div className={styles.select}>
        <LanguageSelect />
      </div>
    </header>
  );
};
