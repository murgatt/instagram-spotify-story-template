import { createEffect } from 'solid-js';
import type { Component } from 'solid-js';
import { useLocation, useNavigate } from 'solid-app-router';
import { useSpotifyAuth } from '../contexts/spotifyAuthContext';
import { getAccessTokenFromUrlHash } from '../utils/auth';
import { spotifyAuthConfig } from '../config/spotifyAuth.config';

const SignInRedirect: Component = () => {
  const { setAccessToken } = useSpotifyAuth();
  const location = useLocation();
  const navigate = useNavigate();

  createEffect(() => {
    const { accessToken, expiresIn } = getAccessTokenFromUrlHash(location.hash);

    if (accessToken && expiresIn) {
      setAccessToken({ token: accessToken, expiresIn });
      navigate('/', { replace: true });
    } else {
      window.location.href = spotifyAuthConfig.loginUrl;
    }
  });

  return <div>Signing you in...</div>;
};

export default SignInRedirect;
