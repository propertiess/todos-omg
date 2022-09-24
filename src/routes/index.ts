import Home from '../pages/Home';
import React from 'react';

interface IRoute {
  path: string;
  element: JSX.Element;
  key: string;
}

export const routes: IRoute[] = [
  { path: '/', element: React.createElement(Home), key: '/' }
];
