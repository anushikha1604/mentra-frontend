import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';

export function PreLoginOutlate() {
  const { sessionObj } = useSelector((state) => state.userSession);

  const navigate = useNavigate();

  useEffect(() => {
    if (sessionObj.userDetails) {
      navigate('/institute');
    }
  }, [navigate, sessionObj.userDetails]);
  return (
    <>
      <Outlet />
    </>
  );
}
