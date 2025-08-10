import MuiBox from '@mui/material/Box';
import View from '../../view';
import { styled } from '@mui/material';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

const drawerWidth = 260;

const Container = styled(MuiBox)(() => ({
  height: '100vh',
  width: '100%',
  display: 'flex',
  gap: 10,
}));

const SidePanel = styled(MuiBox)(({ theme }) => ({
  background: theme.palette.primary.main,
  height: '100vh',
  width: `${drawerWidth}px`,
}));

const Content = styled(MuiBox)(() => ({
  height: '100vh',
  maxWidth: `calc(100% - ${drawerWidth}px)`,
  width: '100%',
  padding: '10px',
  overflow: 'auto',
}));

const ThemeLayout = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  return (
    <Container maxWidth='xl'>
      {user && !user.isAcountVerified ? (
        <>
          <SidePanel />
          <Content>
            <View />
          </Content>
        </>
      ) : (
        <View />
      )}
    </Container>
  );
};

export default ThemeLayout;
