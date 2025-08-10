import React from 'react';
import { type TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

type FormDateFieldProps = {
  name: string;
} & TextFieldProps;

const FormDateField: React.FC<FormDateFieldProps> = ({ name, ...rest }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name]?.message as string | undefined;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        render={({ field }) => (
          <DatePicker
            {...field}
            format='DD-MM-YYYY'
            value={field.value ? dayjs(field.value) : null}
            onChange={(date: unknown) => field.onChange(date)}
            slotProps={{
              textField: {
                ...rest,
                error: !!fieldError,
                helperText: fieldError,
                fullWidth: true,
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default FormDateField;
