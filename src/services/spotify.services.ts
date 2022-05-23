import SpotifyWebApi from 'spotify-web-api-js';
import Vibrant from 'node-vibrant/lib/bundle';

interface TrackWithColors extends SpotifyApi.SingleTrackResponse {
  colors: string[];
}

export async function getTrackData({
  accessToken,
  trackId,
}: {
  accessToken: string;
  trackId: string;
}): Promise<TrackWithColors> {
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(accessToken);

  const track = await spotifyApi.getTrack(trackId);

  const coverUrl = track.album.images[0].url;
  const v = new Vibrant(coverUrl);
  const palette = await v.getPalette();
  const colors = [
    palette.DarkMuted?.hex || '',
    palette.DarkVibrant?.hex || '',
    palette.Muted?.hex || '',
    palette.Vibrant?.hex || '',
    palette.LightMuted?.hex || '',
    palette.LightVibrant?.hex || '',
  ];

  return { ...track, colors };
}
