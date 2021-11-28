import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { EPISODE_FETCH_REQUESTED } from 'store/actions';
import { EpisodeSummary } from '../../components/EpisodeSummary/EpisodeSummary';
import style from './Episode.module.scss';

export const Episode = () => {
  const params = useParams();
  const season = params.season;
  const episode = params.episode;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: EPISODE_FETCH_REQUESTED,
      payload: {
        showId: 6771,
        season,
        episode,
      },
    });
  }, []);

  const episodeState = useSelector((state) => state.episode.episode);
  return (
    <>
      <div className={style.episode}>
        <h1>{episodeState.name}</h1>
        <EpisodeSummary />
      </div>
    </>
  );
};
