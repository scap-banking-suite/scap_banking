import * as z from "zod";

type Field = {
  name: string;
  type:
    | "hidden"
    | "email"
    | "number"
    | "select"
    | "checkbox"
    | "radio"
    | "textarea"
    | "date"
    | "time"
    | "color"
    | "text"
    | "password"
    | "string"
    | "file";
  minLength?: number;
  min?: number;
  max?: number;
  options?: string[];
  placeholder?: string;
  errorMessage?: string;
  isRequired?: boolean;
  maxSizeInMB?: number;
};

const createSchema = (fields: Field[]) => {
  const shape: { [key: string]: z.ZodTypeAny } = {};

  fields.forEach((field) => {
    let schemaField;

    switch (field.type) {
      case "text":
      case "color":
      case "password":
      case "textarea":
      case "string":
        schemaField = z
          .string({ message: `${field?.name} is required` })
          .min(
            field.minLength || 1,
            field.errorMessage || "Invalid field length"
          );
        break;
      case "email":
        schemaField = z
          .string({ message: `${field?.name} is required` })
          .email(field.errorMessage || "Invalid email address");
        break;
      case "date":
        schemaField = z
          .string({ message: `${field?.name} is required` })
          .regex(
            /^\d{4}-\d{2}-\d{2}$/,
            field.errorMessage || "Invalid date format (YYYY-MM-DD)"
          );
        break;
      case "number":
        schemaField = z
          .string({ message: `${field?.name} is required` })
          .regex(
            /^-?\d*\.?\d+$/,
            field.errorMessage || "Must be a valid number"
          )
          .transform((value) => parseFloat(value));
        break;
      case "select":
      case "radio":
        schemaField = z
          .string({ message: `${field?.name} is required` })
          .refine((val) => field.options?.includes(val), {
            message: field.errorMessage || "Invalid selection",
          });
        break;
      case "checkbox":
        schemaField = z.boolean({ message: `${field?.name} is required` });
        break;

      case "file":
        schemaField = z
          .array(z.instanceof(File))
          .nonempty({
            message: "At least one file is required",
          })
          .max(
            field.max || Infinity,
            `Cannot upload more than ${field.max} files`
          )
          .refine(
            (files) =>
              files.every(
                (file) =>
                  file.size <= (field.maxSizeInMB || Infinity) * 1024 * 1024
              ),
            {
              message: `Each file must be smaller than ${field.maxSizeInMB} MB`,
            }
          );
        break;
      default:
        schemaField = z.any();
    }

    shape[field.name] = field.isRequired ? schemaField : schemaField.optional();
  });

  return z.object(shape);
};

export const AllDocAcceptTypes = {
  "application/pdf": [".pdf"],
  "text/csv": [".csv"],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
    ".xlsx",
  ],
  "application/msword": [".doc"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
    ".docx",
  ],
};
export const AllImageAcceptTypes = {
  "image/png": [".png", ".webp", ".jpg", ".jpeg"],
};

export default createSchema;
export type { Field };