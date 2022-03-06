import { Outlet, RouteProps, Navigate } from 'react-router-dom';

import Header from '../Header';
import React from "react";

interface IProps extends RouteProps {}

const _Layout = (props: IProps) => {
  return (
    <div className="flex flex-col min-h-screen App overflow-hidden">
      <main className="flex flex-col w-full h-full flex-1 text-center relative">
        <div className="h-auto w-full">
          <Header />
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default _Layout;

