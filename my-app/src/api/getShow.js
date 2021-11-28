export const getShow = async (showId) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
  return await response.json();
};
