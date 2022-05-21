import type { Component } from 'solid-js';
import { Routes, Route } from 'solid-app-router';
import SpotifyLoginButton from './components/SpotifyLoginButton';
import SignInRedirect from './components/SignInRedirect';
import { useSpotifyAuth } from './contexts/spotifyAuthContext';

const App: Component = () => {
  const { accessToken } = useSpotifyAuth();

  return (
    <main>
      <SpotifyLoginButton />
      {accessToken()}
      <Routes>
        <Route path="/signin" element={<SignInRedirect />} />
      </Routes>
    </main>
  );
};

export default App;
