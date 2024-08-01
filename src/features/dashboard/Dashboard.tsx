import { useState } from "react";
import { ITabItem } from "../../components/tabStrip/ITabItem";
import { TabStrip } from "../../components/tabStrip/TabStrip";
import { TabStripContent } from "../../components/tabStripContent/TabStripContent";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { CareerSection } from "../career/CareerSection";
import { PortfolioSection } from "../portfolio/PortfolioSection";
import { ProjectSection } from "../project/projectSection/ProjectSection";

export const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);

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

  const onSelect = (tabItem: ITabItem, index: number) => setSelected(index);

  return (
    <>
      <TabStrip onSelect={onSelect} selected={selected} tabItems={tabItems} />
      <TabStripContent children={tabItems[selected].content} />
    </>
  );
};
