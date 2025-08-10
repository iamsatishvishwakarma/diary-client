import MuiContainer from '@mui/material/Container';
import Side from './side';
import View from '../../../view';
import { styled } from '@mui/material';

const Container = styled(MuiContainer)(({ theme }) => ({
  background: theme.palette.background.default,
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const AuthLayout = () => {
  return (
    <Container maxWidth='xl'>
      <Side>
        <View />
      </Side>
    </Container>
  );
};

export default AuthLayout;
