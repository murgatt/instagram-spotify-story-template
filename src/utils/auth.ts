import { spotifyAuthConfig } from '../config/spotifyAuth.config';

export const getAccessTokenFromUrlHash = (hash: string): { accessToken: string; expiresIn: string } => {
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

export const getAccessTokenFromSessionStorage = (): { accessToken: string; expiresAt: string } => {
  const accessToken = sessionStorage.getItem(spotifyAuthConfig.sessionStorageAccessTokenKey) || '';
  const expiresAt = sessionStorage.getItem(spotifyAuthConfig.sessionStorageAccessTokenExpiryKey) || '';

  return {
    accessToken,
    expiresAt,
  };
};
