import { AppConfig } from "../AppConfig";
import { IProject, ProjectMeta } from "../model/IProject";
import { DateTime } from "../services/date/DateTime";
import { Repository } from "./core/Repository";

export class ProjectApi extends Repository<IProject> {
  constructor() {
    super(ProjectMeta);
  }

  async findAll(): Promise<IProject[]> {
    const projects = await this.get<IProject[]>(
      `${AppConfig.HOST}/data/projects.json`
    );
    return projects.sort((left, right) =>
      DateTime.compare(right.timeInterval.to, left.timeInterval.to)
    );
  }
}
