export const getSeasonSelector = (state) => {
  let arr = new Array();
  let num = 0;
  for (let i = 0; i < state.episodes.episodes.length; i++) {
    num = state.episodes.episodes[i].season - 1;
    arr[num] = new Array();
    arr[num].push(state.episodes.episodes[i]);
  }

  return arr;
};
