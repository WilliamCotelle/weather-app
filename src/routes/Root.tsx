import { Outlet } from 'react-router-dom';
import './Root.scss';

export default function Root() {
  return (
    <div className="root">
      <Outlet />
    </div>
  );
}
