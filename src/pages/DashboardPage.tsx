import { useState } from "react";
import { PublicPage } from "../components/pages/publicPage/PublicPage";
import { ITabItem } from "../components/tabStrip/ITabItem";
import { TabStrip } from "../components/tabStrip/TabStrip";
import { CareerSection } from "../features/career/CareerSection";
import { PortfolioSection } from "../features/portfolio/PortfolioSection";
import { ProjectSection } from "../features/project/projectSection/ProjectSection";
import { texts } from "../hooks/useTranslation/texts";
import { useTranslation } from "../hooks/useTranslation/useTranslation";

export const DashboardPage: React.FC = () => {
  const { t } = useTranslation();

  const tabItems: ITabItem[] = [
    {
      content: <CareerSection />,
      title: t(texts.dashboardPage.career),
    },
    {
      content: <ProjectSection />,
      title: t(texts.dashboardPage.projects),
    },
    {
      content: <PortfolioSection />,
      title: t(texts.dashboardPage.portfolio),
    },
  ];

  return (
    <PublicPage>
      <TabStrip tabItems={tabItems} />
    </PublicPage>
  );
};
