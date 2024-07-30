import { AppConfig } from "../AppConfig";
import { ResponseType } from "./core/ResponseType";
import { RESTApi } from "./core/RESTApi";

export class DocumentApi extends RESTApi {
  async findDocument(path: string): Promise<string> {
    const document = await this.get<string>(
      `${AppConfig.HOST}${path}`,
      ResponseType.TEXT
    );
    return document;
  }
}
