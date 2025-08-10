import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  type SelectProps,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

type Option = {
  label: string;
  value: string | number;
};

type FormDropDownFieldProps = {
  name: string;
  label: string;
  options: Option[];
} & Omit<SelectProps, 'name' | 'label'>;

const FormDropDownField: React.FC<FormDropDownFieldProps> = ({ name, label, options, ...rest }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name]?.message as string | undefined;

  return (
    <FormControl
      fullWidth
      error={!!fieldError}
    >
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue=''
        render={({ field }) => (
          <Select
            {...field}
            labelId={`${name}-label`}
            label={label}
            {...rest}
          >
            <MenuItem value=''>
              <em>Select {label}</em>
            </MenuItem>
            {options.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      {fieldError && <FormHelperText>{fieldError}</FormHelperText>}
    </FormControl>
  );
};

export default FormDropDownField;
