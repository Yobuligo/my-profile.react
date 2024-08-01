import { useState } from "react";
import { PublicPage } from "../components/pages/publicPage/PublicPage";
import { Dashboard } from "../features/dashboard/Dashboard";
import { ISignal } from "../services/signal/ISignal";
import { Signal } from "../services/signal/Signal";

export const DashboardPage: React.FC = () => {
  const [appLogoClickedSignal, setAppLogoClickedSignal] = useState<
    ISignal | undefined
  >(undefined);

  const onAppLogoClick = () => setAppLogoClickedSignal(new Signal());

  return (
    <PublicPage onAppLogoClick={onAppLogoClick}>
      <Dashboard displayAboutMeSignal={appLogoClickedSignal} />
    </PublicPage>
  );
};
