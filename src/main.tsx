import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CssBaseline />
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
