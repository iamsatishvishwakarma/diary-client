import { Box, Paper, Typography } from '@mui/material';
import UserForm, { type UserFormData } from './user-form';
import { useUserCreateMutation } from '../../../features/user/user-api';

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

const Create = () => {
  const [userCreate, { isLoading }] = useUserCreateMutation();
  const onSubmit = async (data: UserFormData) => {
    console.log(data);
    await userCreate(data);
    // Handle form submission logic here
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

export default Create;
