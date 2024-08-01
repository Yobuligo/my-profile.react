import { useEffect, useState } from "react";
import { ITabItem } from "../../components/tabStrip/ITabItem";
import { TabStrip } from "../../components/tabStrip/TabStrip";
import { TabStripContent } from "../../components/tabStripContent/TabStripContent";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { AboutMe } from "../aboutMe/AboutMe";
import { CareerSection } from "../career/CareerSection";
import { PortfolioSection } from "../portfolio/PortfolioSection";
import { ProjectSection } from "../project/projectSection/ProjectSection";
import { IDashboardProps } from "./IDashboardProps";

export const Dashboard: React.FC<IDashboardProps> = (props) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    if (props.displayAboutMeSignal) {
      setSelected(-1);
    }
  }, [props.displayAboutMeSignal]);

  const tabItems: ITabItem[] = [
    {
      content: <CareerSection />,
      title: t(texts.dashboard.career),
    },
    {
      content: <ProjectSection />,
      title: t(texts.dashboard.projects),
    },
    {
      content: <PortfolioSection />,
      title: t(texts.dashboard.portfolio),
    },
  ];

  const onSelect = (tabItem: ITabItem, index: number) => setSelected(index);

  return (
    <>
      <TabStrip onSelect={onSelect} selected={selected} tabItems={tabItems} />
      <TabStripContent
        children={selected === -1 ? <AboutMe /> : tabItems[selected].content}
      />
    </>
  );
};
