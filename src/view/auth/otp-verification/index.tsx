import MuiCard from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MuiContainer from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormOtpField from '../../../components/ui/form/form-otp-field';
import { useOtpVerificationMutation } from '../../../features/auth/auth-api';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';

const Card = styled(MuiCard)(({ theme }) => ({
  padding: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  border: 'none',
}));

const Container = styled(MuiContainer)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  width: '100%',
}));

const defaultValues = {
  otp: '',
};

const schema = yup.object({
  otp: yup
    .string()
    .required('OTP is required')
    .length(5, 'OTP must be 5 digits')
    .matches(/^\d+$/, 'OTP must be numeric'),
});

type OTPVerificationFormData = yup.InferType<typeof schema>;

const OTPVerification = () => {
  const [otpVerification, { isLoading }] = useOtpVerificationMutation();
  const user = useSelector((state: RootState) => state.user.currentUser);

  const methods = useForm<OTPVerificationFormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = async (data: OTPVerificationFormData) => {
    await otpVerification({ ...data, email: user.email as string }).unwrap();
  };

  return (
    <Container>
      <Paper sx={{ width: 450 }}>
        <Card>
          <Stack
            justifyContent={'center'}
            alignItems='center'
            textAlign={'center'}
            spacing={1}
            mb={3}
          >
            <Typography
              variant='h4'
              sx={{ fontWeight: 600, color: 'secondary.dark' }}
            >
              OTP Verification 🔒
            </Typography>
            <Typography
              variant='body2'
              sx={{ color: 'text.secondary' }}
            >
              Please enter the 6-digit code we sent to your registered email
            </Typography>
          </Stack>
          <FormProvider {...methods}>
            <Box
              component='form'
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <FormOtpField name='otp' />
              <Button
                type='submit'
                variant='contained'
                color='primary'
                size='large'
                sx={{ mt: 3, width: '100%' }}
                loading={isLoading}
              >
                Submit
              </Button>
            </Box>
          </FormProvider>
        </Card>
      </Paper>
    </Container>
  );
};

export default OTPVerification;
