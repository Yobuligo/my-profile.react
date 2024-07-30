import { IError } from "../../core/types/IError";
import { createError } from "../../core/utils/createError";
import { isError } from "../../core/utils/isError";
import { ResponseType } from "./ResponseType";

export abstract class RESTApi {
  protected delete<T>(
    url: string,
    responseType: ResponseType = ResponseType.JSON
  ): Promise<T> {
    return this.createPromise(url, responseType, async () => {
      return await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
        mode: "cors",
      });
    });
  }

  protected get<T>(
    url: string,
    responseType: ResponseType = ResponseType.JSON
  ): Promise<T> {
    return this.createPromise(url, responseType, async () => {
      return await fetch(url, {
        method: "GET",
      });
    });
  }

  protected put<T>(
    url: string,
    data: any,
    responseType: ResponseType = ResponseType.JSON
  ): Promise<T> {
    return this.createPromise(url, responseType, async () => {
      const body = JSON.stringify(data);
      return await fetch(url, {
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        mode: "cors",
      });
    });
  }

  protected post<T>(
    url: string,
    data: any,
    responseType: ResponseType = ResponseType.JSON
  ): Promise<T> {
    return this.createPromise(url, responseType, async () => {
      const body = JSON.stringify(data);
      return await fetch(url, {
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        mode: "cors",
      });
    });
  }

  private async createPromise<T>(
    url: string,
    responseType: ResponseType,
    request: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void
    ) => Promise<Response>
  ): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      try {
        const response = await request(resolve, reject);
        if (response.ok) {
          let data;
          if (responseType === ResponseType.JSON) {
            data = await response.json();
          } else {
            data = await response.text();
          }
          resolve(data);
        } else {
          let data;
          if (responseType === ResponseType.JSON) {
            data = await response.json();
          } else {
            data = await response.text();
          }
          if (isError(data)) {
            reject(data);
          } else {
            reject(this.createFetchError(url));
          }
        }
      } catch (error) {
        if (isError(error)) {
          reject(error);
        } else {
          reject(this.createFetchError(url));
        }
      }
    });
  }

  private createFetchError(url: string): IError {
    return createError(`Error while fetching data from '${url}'`);
  }
}
