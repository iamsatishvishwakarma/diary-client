import { styled } from '@mui/material/styles';
import MuiCard from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormTextField from '../../../components/ui/form/form-text-field';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { APP_NAME } from '../../../constants/app-constant';
import { FormHelperText } from '@mui/material';
import { useLoginMutation } from '../../../features/auth/auth-api';

const Card = styled(MuiCard)(({ theme }) => ({
  padding: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  border: 'none',
}));

const defaultValues = {
  email: '',
  password: '',
};

const schema = yup.object({
  email: yup.string().required('Email is required').email('Invalid email address'),

  password: yup.string().max(10, 'Invalid password').required('Password is required'),
});

type LoginFormData = yup.InferType<typeof schema>;

const SignIn = () => {
  const [login, { isLoading, isError, error }] = useLoginMutation();

  const methods = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = async (data: LoginFormData) => {
    await login(data).unwrap();
  };

  return (
    <Paper sx={{ width: 450 }}>
      <Card>
        <Typography
          variant='h4'
          sx={{ fontWeight: 600, mb: 0.5, color: 'secondary.dark' }}
        >
          Welcome to {APP_NAME} 👋🏻
        </Typography>
        <Typography
          variant='body2'
          sx={{ mb: 3.5, color: 'text.secondary' }}
        >
          Please sign-in to your account and start the adventure
        </Typography>
        <FormProvider {...methods}>
          <Box
            component='form'
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <FormTextField
              name='email'
              label='Email'
              sx={{ mb: 2 }}
            />
            <FormTextField
              name='password'
              label='Password'
            />
            <Button
              type='submit'
              variant='contained'
              sx={{ mt: 3, width: '100%' }}
              loading={isLoading}
            >
              LOGIN
            </Button>
          </Box>
        </FormProvider>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'right',
            color: 'primary.main',
            cursor: 'pointer',
            userSelect: 'none',
            mt: 1,
          }}
        >
          Forgot Password?
        </Typography>
        <FormHelperText
          sx={{
            mt: 1,
            color: 'error.main',
            visibility: isError ? 'visible' : 'hidden',
            textAlign: 'center',
          }}
        >
          {error && error.message}
        </FormHelperText>
      </Card>
    </Paper>
  );
};
export default SignIn;
