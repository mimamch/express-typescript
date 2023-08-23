export default class ValidationError extends Error {
  code;
  constructor(message: string, code?: number) {
    super(message);
    this.code = code;
    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  static isValidationError(error: any): error is ValidationError {
    return (
      error instanceof ValidationError ||
      (error instanceof Error &&
        error.name == "ValidationError" &&
        "message" in error)
    );
  }
}
