import { ArrowBackIcon } from "../../../icons/ArrowBackIcon";
import { IProjectDetailsProps } from "./IProjectDetailsProps";
import styles from "./ProjectDetails.module.scss";
import { useProjectDetailsViewModel } from "./useProjectDetailsViewModel";

export const ProjectDetails: React.FC<IProjectDetailsProps> = (props) => {
  const viewModel = useProjectDetailsViewModel(props);

  return (
    <div className={styles.projectDetails}>
      <ArrowBackIcon className={styles.iconBack} onClick={viewModel.onBack} />
      {props.project.title}
    </div>
  );
};
