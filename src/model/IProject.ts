import { IHavePath } from "../api/core/types/IHavePath";
import { ITimeInterval } from "../services/date/ITimeInterval";
import { IEntity } from "./IEntity";

export interface IProject extends IEntity {
  summary: string;
  timeInterval: ITimeInterval;
  title: string;
}

export const ProjectMeta: IHavePath = { path: "/projects" };
