import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { HomePage } from './pages/HomePage';
import { ProgramsPage } from './pages/ProgramsPage';

function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-ink">Page not found.</h1>
      <p className="mt-3 text-ink-muted">The page you are looking for does not exist.</p>
    </section>
  );
}

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
