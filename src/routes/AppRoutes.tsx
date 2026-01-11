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
import { StudentDashboard } from '../features/student-dashboard/StudentDashboard';
import { StudentManagement } from '../features/student-management/StudentManagement';
import { Companies } from '../features/companies/Companies';
import { JobManagement } from '../features/job-management/JobManagement';
import { Communication } from '../features/communication/Communication';
import { Reports } from '../features/reports/Reports';
import { Settings } from '../components/Settings';

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
          <Route path="/institute/students" element={<StudentManagement />} />
          <Route path="/institute/companies" element={<Companies />} />
          <Route path="/institute/jobs" element={<JobManagement />} />
          <Route path="/institute/communications" element={<Communication />} />
          <Route path="/institute/reports" element={<Reports />} />
          <Route path="/institute/settings" element={<Settings />} />

          <Route path="/institute/*" element={<h2>Not Found</h2>} />
        </Route>

        <Route path="/student" element={<PostOutlate />}>
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/*" element={<h2>Not Found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
