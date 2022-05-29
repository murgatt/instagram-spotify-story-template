import type { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import GithubIcon from './icons/GithubIcon';

const FooterStyled = styled.footer`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Footer: Component = () => (
  <FooterStyled>
    <a href="https://github.com/murgatt/instagram-spotify-story-template" target="_blank" rel="noopener, noreferrer">
      <GithubIcon size={32} />
    </a>
    <p>
      Created by{' '}
      <a href="https://github.com/murgatt" target="_blank" rel="noopener, noreferrer">
        @murgatt
      </a>
    </p>
  </FooterStyled>
);

export default Footer;
