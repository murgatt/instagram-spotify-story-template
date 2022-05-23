const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const spotifyAuthEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = `${BASE_URL}signin`;
const clientId = 'bf752e1cf26d43ca84b8514eef94d8a7';
const loginUrl = `${spotifyAuthEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
const sessionStorageAccessTokenKey = 'spotify-access-token';
const sessionStorageAccessTokenExpiryKey = 'spotify-access-token-expires-at';

export const spotifyAuthConfig = {
  clientId,
  redirectUri,
  loginUrl,
  sessionStorageAccessTokenKey,
  sessionStorageAccessTokenExpiryKey,
};
