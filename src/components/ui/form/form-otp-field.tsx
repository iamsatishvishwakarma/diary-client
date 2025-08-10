import React from 'react';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { Controller, useFormContext } from 'react-hook-form';
import FormHelperText from '@mui/material/FormHelperText';

type FormOtpFieldProps = {
  name: string;
  length?: number;
};

const FormOtpField: React.FC<FormOtpFieldProps> = ({ name, length = 5 }) => {
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
      render={({ field: { value, onChange } }) => (
        <div>
          <MuiOtpInput
            value={value}
            onChange={onChange}
            length={length}
            validateChar={(char: string) => /^\d$/.test(char)}
            TextFieldsProps={{
              placeholder: '-',
              error: !!fieldError,
            }}
          />
          {fieldError && <FormHelperText error>{fieldError}</FormHelperText>}
        </div>
      )}
    />
  );
};

export default FormOtpField;
