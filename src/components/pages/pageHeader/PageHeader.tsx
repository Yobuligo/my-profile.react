import { useMemo } from "react";
import { useLanguage } from "../../../hooks/useLanguage";
import { Language } from "../../../types/Language";
import { ISelectOption } from "../../select/ISelectOption";
import { Select } from "../../select/Select";
import { IPageHeaderProps } from "./IPageHeaderProps";
import styles from "./PageHeader.module.scss";

export const PageHeader: React.FC<IPageHeaderProps> = (props) => {
  const [language, setLanguage] = useLanguage();

  const languageOptions = useMemo<ISelectOption[]>(
    () => [
      { key: "de", text: "Deutsch" },
      { key: "en", text: "English" },
    ],
    []
  );

  const selectedLanguageOption = languageOptions.find(
    (languageOption) => languageOption.key === language
  );

  const onSelect = (option: ISelectOption) => {
    setLanguage(option.key as Language);
  };

  return (
    <header className={styles.pageHeader}>
      <div className={styles.select}>
        <Select
          onSelect={onSelect}
          options={languageOptions}
          selected={selectedLanguageOption}
        />
      </div>
    </header>
  );
};
