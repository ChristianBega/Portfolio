import React, { useState } from "react";
import { ValidationError } from "@formspree/react";
import { FormGroup, Label, Input, TextArea, ErrorText, InputIcon } from "./contact.styles";

interface ContactFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  icon: React.ReactNode;
  errors: any;
  isTextArea?: boolean;
}

const validate = (name: string, value: string): string => {
  switch (name) {
    case "name":
      if (!value.trim()) return "Name is required.";
      if (!/^[a-zA-Z\s]+$/.test(value)) return "Name can only contain letters and spaces.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
      break;
    case "email":
      if (!value.trim()) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address.";
      break;
    case "subject":
      if (!value.trim()) return "Subject is required.";
      if (value.trim().length < 3) return "Subject must be at least 3 characters.";
      break;
    case "message":
      if (!value.trim()) return "Message is required.";
      if (value.trim().length < 10) return "Message must be at least 10 characters.";
      break;
    default:
      break;
  }
  return "";
};

const ContactField: React.FC<ContactFieldProps> = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  icon,
  errors,
  isTextArea = false,
}) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const error = touched ? validate(name, value) : "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <FormGroup>
      <Label htmlFor={id}>{label}</Label>
      {isTextArea ? (
        <TextArea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : (
        <Input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      <InputIcon>{icon}</InputIcon>
      <ErrorText id={`${id}-error`}>
        {error}
        <ValidationError prefix={label} field={name} errors={errors} />
      </ErrorText>
    </FormGroup>
  );
};

export default ContactField;
