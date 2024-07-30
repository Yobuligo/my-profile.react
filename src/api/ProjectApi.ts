import { IProject, ProjectMeta } from "../model/IProject";
import { Repository } from "./core/Repository";

export class ProjectApi extends Repository<IProject> {
  constructor() {
    super(ProjectMeta);
  }

  async findAll(): Promise<IProject[]> {
    return await this.get("/data/projects.json");
  }
}
