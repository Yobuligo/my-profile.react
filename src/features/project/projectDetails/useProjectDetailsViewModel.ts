import { IProjectDetailsProps } from "./IProjectDetailsProps";

export const useProjectDetailsViewModel = (props: IProjectDetailsProps) => {
  const onBack = () => props.onBack?.();

  return {
    onBack,
  };
};
