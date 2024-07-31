import { AppContext } from "./context/AppContext";
import { useLanguageStorage } from "./hooks/useLanguageStorage";
import { DashboardPage } from "./pages/DashboardPage";

export const App: React.FC = () => {
  return (
    <AppContext.Provider value={{ language: useLanguageStorage() }}>
      <DashboardPage />
    </AppContext.Provider>
  );
};
