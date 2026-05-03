export const successResponse = (message: string = "Success", data: any = {}) => {
  return {
    success: true,
    message,
    data,
  };
};

export const errorResponse = (message: string = "Error", data: any = {}) => {
  return {
    success: false,
    message,
    data,
  };
};
