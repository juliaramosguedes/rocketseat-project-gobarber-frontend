import { ValidationError } from 'yup';

interface ErrorsDTO {
  [key: string]: string;
}

export const getValidationErrors = (errors: ValidationError): ErrorsDTO => {
  const validationErrors: ErrorsDTO = {};

  errors.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
};
