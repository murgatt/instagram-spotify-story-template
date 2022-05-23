import { Outlet } from 'solid-app-router';
import type { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

const Main = styled.main`
  min-height: 100vh;
  background-color: var(--background-main);
  color: var(--color-main);
  padding: 24px;
`;

const Layout: Component = () => (
  <Main>
    <Outlet />
  </Main>
);

export default Layout;
