import { Route, Routes, BrowserRouter } from 'react-router';
import { HOME, LOGIN, SIGNIN, SIGNUP } from '../constants/ROUTES';
import { PreLoginOutlate } from './PreLoginOutlate';
import { LandingPage } from '../features/landing/LandingPage';
import { LoginPage } from '../features/login/LoginPage';
import App from '../App';
import { SignUpPage } from '../features/signup/SignUpPage';
import { SignupStudent } from '../features/signup/SignupStudent';
import { SignupInstitute } from '../features/signup/SignupInstitute';
import { Counter } from '../features/counter/Counter';
import { InstituteDashboard } from '../features/institute-dashboard/InstituteDashboard';
import { PostOutlate } from '../features/post-outlate/PostOutlate';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PreLoginOutlate />}>
          <Route path="/old-app" element={<App />} />
          <Route path={HOME} element={<LandingPage />} />
          <Route path={LOGIN} element={<LoginPage />} />
          <Route path={SIGNUP} element={<SignUpPage />} />
          <Route path="/signup/student" element={<SignupStudent />} />
          <Route path="/signup/institute" element={<SignupInstitute />} />
          <Route path="/counter" element={<Counter />} />
        </Route>
        <Route path="/institute" element={<PostOutlate />}>
          <Route path="/institute" element={<InstituteDashboard />} />
          <Route path="/institute/*" element={<h2>Not Found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
