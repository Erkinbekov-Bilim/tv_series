import React, { useEffect, useState } from 'react';
import './FormTVShow.css';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/redux';
import {
  getSearchTVShows,
  selectError,
  selectShows,
} from '../../../redux/features/tvSeries/tvSeriesSlice';
import useDelaySearch from '../../../hooks/useDelaySearch';
import Autocomplete from '../../../UI/Autocomplete/Autocomplete';
import type IShowApi from '../../../types/tsShow/showAPI';

const FormTVShow = () => {
  const shows: IShowApi[] = useAppSelector(selectShows);
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();
  const [showName, setShowName] = useState<string>('');
  const delayQueryValue = useDelaySearch(showName, 300);
  const [hide, setHide] = useState<boolean>(false);

  const onHide = (state: boolean) => {
    setHide(state);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHide(false);
    setShowName(event.target.value);
  };

  useEffect(() => {
    dispatch(getSearchTVShows(delayQueryValue));
  }, [delayQueryValue, dispatch]);

  return (
    <>
      <div className="form-block">
        <form>
          <div className="input-block">
            <label htmlFor="tv_show">Search for TV Show</label>
            <input
              type="search"
              onChange={onChange}
              title="TV Show"
              id="tv_show"
              placeholder="search show"
            />
          </div>
        </form>
        {error ? (
          <p>Error</p>
        ) : (
          <>
            {shows.length > 0 && (
              <Autocomplete data={shows} onHide={onHide} isHide={hide} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default FormTVShow;
