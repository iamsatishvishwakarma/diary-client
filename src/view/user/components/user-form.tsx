import { Box, Button, Grid, Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import FormTextField from '../../../components/ui/form/form-text-field';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormDropDownField from '../../../components/ui/form/form-dropdown';
import {
  _GENDER_OPTIONS,
  _ROLE_OPTIONS,
  _STATUS_OPTIONS,
  _USER_TYPE_OPTIONS,
} from '../../../constants/values-constant';

interface IProps {
  defaultValues?: UserFormData;
  onSubmit: (data: UserFormData) => void;
  isLoading: boolean;
}

const schema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed in the name'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  address: yup.string().required('Address is required'),
  role: yup
    .string()
    .required('Role is required')
    .oneOf(['admin', 'editor', 'author', 'maintainer', 'subscriber'], 'Invalid role'),
  mobile: yup
    .string()
    .required('Mobile number is required')
    .matches(/^[0-9]+$/, 'Mobile number must be numeric')
    .min(10, 'Mobile number must be at least 10 digits')
    .max(10, 'Mobile number must not exceed 10 digits'),
  gender: yup.string().required('Gender is required').oneOf(['male', 'female'], 'Invalid gender'),
  status: yup
    .string()
    .required('Status is required')
    .oneOf(['active', 'inactive'], 'Invalid status'),
  type: yup
    .string()
    .required('User type is required')
    .oneOf(['labour', 'supervisor'], 'Invalid user type'),
});

export type UserFormData = yup.InferType<typeof schema>;

const UserForm = (props: IProps) => {
  const { defaultValues, onSubmit, isLoading } = props;

  const methods = useForm<UserFormData>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <Box
        component='form'
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Grid
          container
          spacing={2}
        >
          <Grid size={6}>
            <FormTextField
              name='name'
              label='Name'
            />
          </Grid>
          <Grid size={6}>
            <FormTextField
              name='email'
              label='Email'
            />
          </Grid>
          <Grid size={6}>
            <FormTextField
              name='password'
              label='Password'
              type='password'
            />
          </Grid>
          <Grid size={6}>
            <FormTextField
              name='mobile'
              label='Mobile'
            />
          </Grid>
          <Grid size={6}>
            <FormTextField
              name='address'
              label='Address'
            />
          </Grid>
          <Grid size={6}>
            <FormDropDownField
              name='status'
              label='Status'
              options={_STATUS_OPTIONS}
            />
          </Grid>
          <Grid size={6}>
            <FormDropDownField
              name='gender'
              label='Gender'
              options={_GENDER_OPTIONS}
            />
          </Grid>
          <Grid size={6}>
            <FormDropDownField
              name='role'
              label='Role'
              options={_ROLE_OPTIONS}
            />
          </Grid>
          <Grid size={6}>
            <FormDropDownField
              name='type'
              label='Type'
              options={_USER_TYPE_OPTIONS}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Stack
            direction='row'
            spacing={2}
            alignItems='center'
            justifyContent='flex-end'
            sx={{ mt: 2 }}
          >
            {/* <Button
              type='submit'
              variant='contained'
              loading={false}
            >
              Cancel
            </Button> */}
            <Button
              type='submit'
              variant='contained'
              loading={isLoading}
              color='error'
            >
              SUMBIT
            </Button>
          </Stack>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default UserForm;
