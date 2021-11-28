export const getSeasonSelector = (state) => {
  let arr = new Array();
  let num = 0;
  var obj = {};
  for (
    let i = 0;
    i < state.episodes.episodes[state.episodes.episodes.length - 1].season;
    i++
  ) {
    arr[i] = new Array();
  }
  for (let j = 0; j < state.episodes.episodes.length; j++) {
    obj = state.episodes.episodes[j];
    num = state.episodes.episodes[j].season - 1;
    arr[num].push(obj);
  }

  return arr;
};
