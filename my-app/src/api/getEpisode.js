export const getOneEpisode = async (showId, seasonNumber, episodeNumber) => {
  const response = await fetch(
    `https://api.tvmaze.com/shows/${showId}/episodebynumber?season=${seasonNumber}&number=${episodeNumber}`
  );
  return await response.json();
};
