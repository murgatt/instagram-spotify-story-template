import type { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { spotifyAuthConfig } from '../config/spotifyAuth.config';
import Button from '../components/Button';

const LoginSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 48px);
`;

const Login: Component = () => (
  <LoginSection>
    <div>
      <Button as="a" href={spotifyAuthConfig.loginUrl}>
        Login with Spotify
      </Button>
    </div>
  </LoginSection>
);

export default Login;
