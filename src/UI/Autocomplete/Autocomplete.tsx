import { Link } from 'react-router-dom';
import './Autocomplete.css';
import React from 'react';
import type IShowApi from '../../types/tsShow/showAPI';

interface IAutocompleteProps {
  data: IShowApi[];
  isHide: boolean;
  onHide: (state: boolean) => void;
}

const Autocomplete: React.FC<IAutocompleteProps> = ({ data, onHide, isHide }) => {
  return (
    <>
      <div className={`autocomplete ${isHide ? 'hide' : 'show'}`}>
        <div className="autocomplete-content">
          {data.map((item) => (
            <Link to={`shows/${item.show.id}`} key={item.show.id} onClick={() => onHide(true)}>
              {item.show.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Autocomplete;
