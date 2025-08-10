import React from 'react';
import { TextField, type TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

type FormTextFieldProps = {
  name: string;
} & TextFieldProps;

const FormTextField: React.FC<FormTextFieldProps> = ({ name, ...rest }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name]?.message as string | undefined;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=''
      render={({ field }) => (
        <TextField
          {...field}
          {...rest}
          error={!!fieldError}
          helperText={fieldError}
          fullWidth
        />
      )}
    />
  );
};

export default FormTextField;
