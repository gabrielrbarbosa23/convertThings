import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import Navbar from './components/navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Navbar />
      <MainRoutes />
    </BrowserRouter>
);