import { ITabItem } from "../components/tabStrip/ITabItem";
import { TabStrip } from "../components/tabStrip/TabStrip";
import { texts } from "../hooks/useTranslation/texts";
import { useTranslation } from "../hooks/useTranslation/useTranslation";

export const DashboardPage: React.FC = () => {
  const { t } = useTranslation();

  const tabItems: ITabItem[] = [
    {
      content: <>CV</>,
      title: t(texts.dashboardPage.cv),
    },
    {
      content: <>Projects</>,
      title: t(texts.dashboardPage.projects),
    },
    {
      content: <>Portfolio</>,
      title: t(texts.dashboardPage.portfolio),
    },
  ];

  return (
    <>
      <TabStrip tabItems={tabItems} />
    </>
  );
};
