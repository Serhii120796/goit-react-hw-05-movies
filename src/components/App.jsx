import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import NotFound from 'pages/NoteFound/NotFound';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';

export const App = () => {
 
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/> } />
        </Route>
        <Route path="*" element={ <NotFound/>} />
      </Routes>
    </Layout>
  );
};
