import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";

export const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  return <>{t(texts.aboutMe.welcome)}</>;
};
