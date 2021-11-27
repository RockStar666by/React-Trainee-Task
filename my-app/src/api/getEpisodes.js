export const getEpisodes = async (showId) => {
  const response = await fetch(
    `https://api.tvmaze.com/shows/${showId}/episodes`
  );
  return await response.json();
};
