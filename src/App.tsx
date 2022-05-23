import type { Component } from 'solid-js';
import { Routes, Route } from 'solid-app-router';
import Layout from './components/Layout';
import Home from './views/Home';
import Login from './views/Login';
import SignInRedirect from './components/SignInRedirect';
import { useSpotifyAuth } from './contexts/spotifyAuthContext';

const App: Component = () => {
  const { accessToken } = useSpotifyAuth();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={accessToken() ? <Home /> : <Login />} />
        <Route path="/signin" element={<SignInRedirect />} />
      </Route>
    </Routes>
  );
};

export default App;
