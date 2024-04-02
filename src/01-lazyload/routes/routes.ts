//! Deprecated
import { LazyExoticComponent, lazy } from 'react';
import { NoLazy } from '../pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /*webpackChunkName: "LazyLayout"*/ '../layout/LazyLayout'
    )
);

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: LazyLayout,
    name: 'LazyLayout - Dash',
  },
  { to: '/no-lazy', path: 'no-lazy', Component: NoLazy, name: 'No Lazy' },
];
