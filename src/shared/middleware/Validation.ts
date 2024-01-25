import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Schema, ValidationError } from 'yup';

type TProprety = 'body'| 'header' | 'params' | 'query';
type TAllSchemas = Record<TProprety, Schema<unknown>>
type TGetSchema = <T>(schema: Schema<T>) => Schema<T>;
type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>
type TValidation = (getAllSchemas : TGetAllSchemas) => RequestHandler;

export const Validation: TValidation = (getAllSchemas) =>  async (req, res, next) => {
  const schemas = getAllSchemas(schema => schema);

  const errorResult: Record<string, Record<string, string>> = {};

  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      schema.validateSync(req[key as TProprety], { abortEarly: false });
    } catch (error) {
      const yupError = error as ValidationError;
      const errors: Record<string, string> = {};
  
      yupError.inner.forEach((err) => {
        if(err.path === undefined) return;
        errors[err.path] = err.message;
      });
      errorResult[key] = errors;
     
    }
  });

  if(Object.entries(errorResult).length === 0){
    return next();
  }else {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: errorResult,
    });
  }

};
