import { FETCH_STARSHIPS, NEW_STARSHIP } from './types';

export const fetchStarships = () => dispatch => {
    console.log('fetching');
    fetch('https://swapi.co/api/starships/')
        .then(res => res.json())
        .then(data => {
            let i =0;
            data.results.forEach((s) => {
                s.id = i;
                i++;
            })
            console.log('starship DATA:', data);
            dispatch({
                type: FETCH_STARSHIPS,
                payload: data.results
            });
        });
}
export const createStarships = (starshipData) => {
    return dispatch => {
        console.log('createStarships');
        dispatch({
            type: NEW_STARSHIP,
            payload: starshipData,
        });
    };
}