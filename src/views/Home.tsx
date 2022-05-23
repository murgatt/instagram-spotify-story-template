import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';
import Search from './Search';
import Track from './Track';

const Home: Component = () => {
  const [trackId, setTrackId] = createSignal('');

  const handleTrackSelected = (id: string) => setTrackId(id);

  return <>{trackId() ? <Track trackId={trackId()} /> : <Search onTrackSelected={handleTrackSelected} />}</>;
};

export default Home;
