import { useCallback, useEffect, useState } from "react";
import Markdown from "react-markdown";
import { DocumentApi } from "../../../api/DocumentApi";
import { Spinner } from "../../../components/spinner/Spinner";
import { ArrowBackIcon } from "../../../icons/ArrowBackIcon";
import { IProjectDetailsProps } from "./IProjectDetailsProps";
import styles from "./ProjectDetails.module.scss";
import { useProjectDetailsViewModel } from "./useProjectDetailsViewModel";

export const ProjectDetails: React.FC<IProjectDetailsProps> = (props) => {
  const viewModel = useProjectDetailsViewModel(props);
  const [isLoading, setIsLoading] = useState(false);
  const [markdown, setMarkdown] = useState("");

  const loadDocument = useCallback(async () => {
    setIsLoading(true);
    const documentApi = new DocumentApi();
    const markdown = await documentApi.findDocument(props.project.url);
    setMarkdown(markdown);
    setIsLoading(false);
  }, [props.project.url]);

  useEffect(() => {
    loadDocument();
  }, [loadDocument]);

  return (
    <div className={styles.projectDetails}>
      <ArrowBackIcon className={styles.iconBack} onClick={viewModel.onBack} />
      {isLoading && <Spinner />}
      {markdown && <Markdown className={styles.markdown}>{markdown}</Markdown>}
    </div>
  );
};
