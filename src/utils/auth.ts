import { spotifyAuthConfig } from '../config/spotifyAuth.config';

type AccessTokenWithExpiry = { accessToken: string; expiresIn: string };

export const getAccessTokenFromUrlHash = (hash: string): AccessTokenWithExpiry => {
  if (!hash)
    return {
      accessToken: '',
      expiresIn: '',
    };

  const hashParams = hash
    .replace('#', '')
    .split('&')
    .reduce<Record<string, string>>((prev, current) => {
      const [key, value] = current.split('=');

      return {
        ...prev,
        [key]: value,
      };
    }, {});

  return {
    accessToken: hashParams.access_token,
    expiresIn: hashParams.expires_in,
  };
};

export const getAccessTokenFromSessionStorage = (): AccessTokenWithExpiry => {
  const accessToken = sessionStorage.getItem(spotifyAuthConfig.sessionStorageAccessTokenKey) || '';
  const expiresIn = sessionStorage.getItem(spotifyAuthConfig.sessionStorageAccessTokenExpiryKey) || '';

  return {
    accessToken,
    expiresIn,
  };
};
