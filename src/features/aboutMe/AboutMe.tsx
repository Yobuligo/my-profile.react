import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";

export const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  return <>{t(texts.aboutMe.welcome)}
  Was kann ich anbieten?
  Wovon profitiert ein Unternehmen, wenn sie mich buchen? 
  Welche Probleme kann ich für ein Unternehmen lösen? 
  - Den Kundenstamm erhöhen
	- Focus on your business, while I focus on growing your business
	- I help coffee shops getting more customers
	- Wir lösen Probleme
	- Wir kitzeln die richtigen Anforderungen aus dem Kunden raus
	- Wir können Leute dafür einsetzen, wofür sie geeignet sind
	- Wir können eine vernünftige Planung und Schätzung erstellen
	- Wir können Projekte in Projektpakete aufteilen, um daraus eine Planung und eine Schätzung zu erstellen
	- Wir können Leute ausbilden
	- Unser Coding ist so strukturiert, das zusätzliche Features kostengünstig hinzugefügt werden können
	- Wir können Software entwickeln, die der Kunden versteht, was Supportaufwände verringert
	- Wir können Workshops und Meetings strukturiert planen und moderieren, um Ausufern zu verhindern

  Warum sollten sie mit mir arbeiten?
  - Empfehlungsschreiben (Zitate von anderen - Testimonials)
  </>;
};
