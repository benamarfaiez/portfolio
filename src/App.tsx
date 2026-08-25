// App.tsx
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './i18n';
import Layout from './components/Layout';
import { PageLoader } from './components/ui/PageLoader';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { routes } from './routes';

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {routes.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
}