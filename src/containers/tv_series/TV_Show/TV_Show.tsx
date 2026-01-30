import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/redux';
import {
  getTVShowByQ,
  selectShow,
} from '../../../redux/features/tvSeries/tvSeriesSlice';
import './TV_Show.css';

const TV_Show = () => {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectShow);
  const params = useParams<{ idShow: string }>();
  let summery: null | string = null;

  if (show) {
    summery = show.summary;
  }

  useEffect(() => {
    if (params.idShow) {
      dispatch(getTVShowByQ(params.idShow));
    }
  }, [params.idShow]);

  return (
    <>
      {show && (
        <div className="show-block">
          <div className="show">
            <div className="show-image">
              <img src={show.image.original} alt={show.name} />
            </div>
            <div className="show-info">
              <p className="show-name">{show.name}</p>

              <div className="about-show">
                <p className="about-show-title">About Show</p>

                <div className="about-show-info">
                  <div className="about-show-labels">
                    <p className="about-show-label">Year of production:</p>
                    <p>{show.premiered}</p>
                  </div>
                  <div className="about-show-labels">
                    <p className="about-show-label">Language:</p>
                    <p>{show.language}</p>
                  </div>
                  <div className="about-show-labels">
                    <p className="about-show-label">Rating:</p>
                    <p>{show.rating.average}</p>
                  </div>
                  <div className="about-show-labels">
                    <p className="about-show-label">Status:</p>
                    <p>{show.status}</p>
                  </div>
                  <div className="about-show-labels">
                    <p className="about-show-label">Runtime:</p>
                    <p>{show.runtime}</p>
                  </div>
                  <div className="about-show-labels">
                    <p className="about-show-label">Genre:</p>
                    <p>{show.genres.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {summery && (
            <div
              dangerouslySetInnerHTML={{ __html: summery }}
              className="show-summery"
            />
          )}
        </div>
      )}
    </>
  );
};

export default TV_Show;
