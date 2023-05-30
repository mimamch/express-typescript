export const responseSuccessWithData = (data: any) => ({ data: data });
export const responseSuccessWithMessage = (
  message: string = "Yeyy... Request Send With Successfully"
) => ({
  message: message,
});
export const responseErrorWithMessage = (
  message: string = "Upsss... Something went wrong on server"
) => ({
  message: message,
});
