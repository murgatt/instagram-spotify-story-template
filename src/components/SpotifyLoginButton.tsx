import type { Component } from 'solid-js';
import { spotifyAuthConfig } from '../config/spotifyAuth.config';

const SpotifyLoginButton: Component = () => <a href={spotifyAuthConfig.loginUrl}>Sign in with Spotify</a>;

export default SpotifyLoginButton;
