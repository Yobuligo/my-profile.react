import { PublicPage } from "../components/pages/publicPage/PublicPage";
import { Dashboard } from "../features/dashboard/Dashboard";
import { useSignal } from "../hooks/useSignal";

export const DashboardPage: React.FC = () => {
  const [appLogoClickedSignal, triggerAppLogoClickedSignal] = useSignal();

  const onAppLogoClick = () => triggerAppLogoClickedSignal();

  return (
    <PublicPage onAppLogoClick={onAppLogoClick}>
      <Dashboard displayAboutMeSignal={appLogoClickedSignal} />
    </PublicPage>
  );
};
