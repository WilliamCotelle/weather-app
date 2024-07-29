import React from 'react';
import { Outlet } from 'react-router-dom';
import './Root.scss';
import { CityProvider } from '@/context/CityContext';

export default function Root() {
  return (
    <CityProvider>
      <div className="root">
        <Outlet />
      </div>
    </CityProvider>
  );
}
