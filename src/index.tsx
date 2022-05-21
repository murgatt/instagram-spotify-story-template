/* @refresh reload */
import { render } from 'solid-js/web'; // eslint-disable-line
import { Router } from 'solid-app-router';
import App from './App';

import 'modern-normalize/modern-normalize.css';
import { SpotifyAuthProvider } from './contexts/spotifyAuthContext';

render(
  () => (
    <Router>
      <SpotifyAuthProvider>
        <App />
      </SpotifyAuthProvider>
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
);
