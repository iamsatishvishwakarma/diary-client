import { Box, Paper, Typography } from '@mui/material';
import UserForm, { type UserFormData } from './user-form';
import { useUserCreateMutation, useUserDetailsMutation } from '../../../features/user/user-api';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const defaultValues: UserFormData = {
  name: '',
  email: '',
  password: '',
  address: '',
  role: '',
  mobile: '',
  gender: '',
  status: '',
  type: '',
};

const Edit = () => {
  const params = useLocation();
  const userId = params.pathname.split('/').pop();
  const [userDetails, { isLoading }] = useUserDetailsMutation();

  useEffect(() => {
    userDetails(userId);
  });
  const onSubmit = async (data: UserFormData) => {
    await userCreate(data);
  };
  return (
    <Box sx={{ p: 2 }}>
      <Paper>
        <Typography
          variant='h3'
          sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}
        >
          New User
        </Typography>
        <UserForm
          defaultValues={defaultValues}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </Paper>
    </Box>
  );
};

export default Edit;
