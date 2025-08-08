export const errorHandler = (statusCode,message) => {
 const error=new Error();
 error.statusCode = res.statusCode;
 error.message=message;
 return error;
};