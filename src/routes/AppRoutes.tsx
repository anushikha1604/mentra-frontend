import { Route, Routes, BrowserRouter } from 'react-router';
import { HOME, LOGIN, SIGNIN, SIGNUP } from '../constants/ROUTES';
import { PreLoginRoot } from './PreLoginRoot';
import { LandingPage } from '../pages/landing/LandingPage';
import { LoginPage } from '../pages/login/LoginPage';
import App from '../App';
import { SignUpPage } from '../pages/signup/SignUpPage';
import { SignupStudent } from '../pages/signup/SignupStudent';
import { SignupInstitute } from '../pages/signup/SignupInstitute';
import { Counter } from '../pages/counter/Counter';

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
          <Route path="/counter" element={<Counter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
