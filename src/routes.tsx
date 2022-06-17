import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from '@/layout';
import Home from '@/pages/Home';
import Movie from '@/pages/Movie';
import Search from '@/pages/Search';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/movie/:movieId" element={<Movie />} />
        <Route path="/search/:query" element={<Search />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
