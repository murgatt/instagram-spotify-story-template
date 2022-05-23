/* @refresh reload */
import { render } from 'solid-js/web'; // eslint-disable-line
import { Router } from 'solid-app-router';
import App from './App';
import { SpotifyAuthProvider } from './contexts/spotifyAuthContext';

import 'modern-normalize/modern-normalize.css';
import './styles/index.css';
import './styles/variables.css';

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
