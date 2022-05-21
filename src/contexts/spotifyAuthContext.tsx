import { createSignal, createContext, useContext } from 'solid-js';
import type { PropsWithChildren, Accessor } from 'solid-js';
import { spotifyAuthConfig } from '../config/spotifyAuth.config';
import { getAccessTokenFromSessionStorage } from '../utils/auth';

type SetAccessTokenType = ({ token, expiresIn }: { token: string; expiresIn: string }) => void;
type SpotifyAuthContextType = {
  accessToken: Accessor<string>;
  setAccessToken: SetAccessTokenType;
};

const SpotifyAuthContext = createContext<SpotifyAuthContextType>();

export function SpotifyAuthProvider(props: PropsWithChildren) {
  const { accessToken: storedToken, expiresAt: storedExpiresAt } = getAccessTokenFromSessionStorage();
  let initialValue = '';

  if (storedToken && parseInt(storedExpiresAt, 10) > Date.now()) {
    initialValue = storedToken;
  }

  const [accessToken, setAccessToken] = createSignal(initialValue);

  const setter: SetAccessTokenType = ({ token, expiresIn }) => {
    const expiresAt = Date.now() + 1000 * parseInt(expiresIn, 10);
    sessionStorage.setItem(spotifyAuthConfig.sessionStorageAccessTokenKey, token);
    sessionStorage.setItem(spotifyAuthConfig.sessionStorageAccessTokenExpiryKey, `${expiresAt}`);
    setAccessToken(token);
  };

  const value: SpotifyAuthContextType = { accessToken, setAccessToken: setter };

  return <SpotifyAuthContext.Provider value={value}>{props.children}</SpotifyAuthContext.Provider>;
}

export function useSpotifyAuth() {
  const context = useContext(SpotifyAuthContext);

  if (context === undefined) {
    throw new Error('useSpotifyAuth must be used within an SpotifyAuthProvider');
  }

  return context;
}
