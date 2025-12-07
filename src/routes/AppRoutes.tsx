import { Route, Routes, BrowserRouter } from 'react-router';
import { HOME, LOGIN, SIGNIN, SIGNUP } from '../constants/ROUTES';
import { PreLoginRoot } from './PreLoginRoot';
import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';
import App from '../App';
import { SignUpPage } from '../pages/SignUpPage';
import { SignupStudent } from '../pages/SignupStudent';
import { SignupInstitute } from '../pages/SignupInstitute';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PreLoginRoot />}>
          <Route path="/old-app" element={<App />} />
          <Route path={HOME} element={<LandingPage />} />
          <Route path={LOGIN} element={<LoginPage />} />
          <Route path={SIGNUP} element={<SignUpPage />} />
          <Route path="/signup/student" element={<SignupStudent />} />
          <Route path="/signup/institute" element={<SignupInstitute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
