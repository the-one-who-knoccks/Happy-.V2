import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string; // Pode ser qualquer coisa desde que seja uma string
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
