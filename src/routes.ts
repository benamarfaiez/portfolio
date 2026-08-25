// config/routes.ts
import { ComponentType, lazy } from 'react';

export interface RouteConfig {
  path: string;
  component: ComponentType;
  isExact?: boolean;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: lazy(() => import('./HomePage')),
  },
  {
    path: '/experiences/:slug',
    component: lazy(() => import('./components/Experience/ExperienceDetail')),
  },
  {
    path: '/skills/:category',
    component: lazy(() => import('./components/skills/SkillsCategory')),
  },
  {
    path: '*',
    component: lazy(() => import('./components/NotFound')),
  },
];