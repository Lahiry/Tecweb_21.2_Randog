import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import Routes from './routes';

export function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}