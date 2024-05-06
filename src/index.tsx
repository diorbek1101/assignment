import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'assets/styles/tailwind.css';
import { Navbar } from 'components';
import Routes from 'routes';

const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes />
  </BrowserRouter>
);
