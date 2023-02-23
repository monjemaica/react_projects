import _ from 'lodash';
import React from 'react';
// import styles from '../styles.module.css';

const Filter = ({movies, onChangeFilter}) => {
    const movieData = [...movies];
    const genre = _.uniq(_.map(movieData, "genre"));

    
    return (
        <>
            <ul className="list-group">
                {genre.map(m => 
                    <li className="list-group-item" aria-current="true" onClick={() => onChangeFilter(m)}>{m}</li>
                )}
            </ul>
        </>
    );
}

export default Filter;