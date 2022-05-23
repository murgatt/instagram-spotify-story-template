import { createEffect, createResource, createSignal } from 'solid-js';
import type { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { useSpotifyAuth } from '../contexts/spotifyAuthContext';
import { getTrackData } from '../services/spotify.services';
import StoryTemplate from '../components/StoryTemplate';
import ColorSelection from '../components/ColorSelection';
import DownloadButton from '../components/DownloadButton';

type TrackProps = {
  trackId: string;
};

const TrackSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Track: Component<TrackProps> = props => {
  const [color, setColor] = createSignal('');
  const [isCoverDisplayed, setIsCoverDisplayed] = createSignal(true);
  const { accessToken } = useSpotifyAuth();
  const fetchTrackData = async (id: string) => getTrackData({ trackId: id, accessToken: accessToken() });
  const trackId = () => props.trackId;
  const [track] = createResource(trackId, fetchTrackData);

  createEffect(() => {
    const initialColor = track()?.colors[0] || '';
    setColor(initialColor);
  });

  const handleTemplateClick = () => {
    setIsCoverDisplayed(!isCoverDisplayed());
  };

  return (
    <TrackSection>
      <div>{track.loading && 'Loading...'}</div>
      {!track.loading && !track.loading && track() && (
        <>
          <StoryTemplate
            color={color()}
            coverUrl={track()?.album.images[0].url || ''}
            isCoverDisplayed={isCoverDisplayed()}
            onClick={handleTemplateClick}
          />
          <ColorSelection selectedColor={color()} colors={track()?.colors || []} onColorChange={setColor} />
          <DownloadButton />
        </>
      )}
    </TrackSection>
  );
};

export default Track;
