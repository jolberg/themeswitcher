import {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme'; 
import { GlobalStyles } from './global';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    console.log(theme);
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles />
      <h1>Switching themes</h1>
      <button onClick={toggleTheme}>Switch theme</button>
      </>
    </ThemeProvider>
  );
}

export default App;
