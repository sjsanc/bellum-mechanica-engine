export interface IErrorResponse {
  code: string;
  message: object;
}

export class ErrorResponse implements IErrorResponse {
  code: string;
  message: object;

  constructor(code: string, message: object) {
    this.code = code;
    this.message = message;
  }
}
