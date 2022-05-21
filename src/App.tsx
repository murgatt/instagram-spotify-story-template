import type { Component } from 'solid-js';
import { Routes, Route } from 'solid-app-router';
import SpotifyLoginButton from './components/SpotifyLoginButton';
import SignInRedirect from './components/SignInRedirect';

const App: Component = () => {
  return (
    <main>
      <SpotifyLoginButton />
      <Routes>
        <Route path="/signin" element={<SignInRedirect />} />
      </Routes>
    </main>
  );
};

export default App;
