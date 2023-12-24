import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Layout />
          </Suspense>
        }
      >
        <Route index element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />

        <Route path="/movies" element={<Suspense fallback={<div>Loading...</div>}><Movies /></Suspense>} />

        <Route path="/movies/:movieId" element={<Suspense fallback={<div>Loading...</div>}><MovieDetails /></Suspense>}>
          <Route path="/movies/:movieId/cast" element={<Suspense fallback={<div>Loading...</div>}><Cast /></Suspense>} />
          <Route path="/movies/:movieId/reviews" element={<Suspense fallback={<div>Loading...</div>}><Reviews /></Suspense>} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;      