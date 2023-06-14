export default class ValidationError extends Error {
  constructor(message: string, code?: number) {
    super(message);
    this.code = code;
  }
  code;
}
