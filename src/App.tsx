import './App.css';
import Layouts from './components/layouts';
import AppThemeProvider from './theme/theme-provider';

function App() {
  return (
    <AppThemeProvider>
      <Layouts />
    </AppThemeProvider>
  );
}

export default App;
