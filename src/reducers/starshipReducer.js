import { FETCH_STARSHIPS, NEW_STARSHIP } from '../actions/types';

const initialState = {
    items: [],
    item: {}, 
    newStarshipId: 0,
}

export default function(state = initialState, action) {
    
    switch(action.type) {
        case FETCH_STARSHIPS:
            console.log('FETCH_STARSHIPS action.type: ', action.type);
            return{
                ...state,
                items: action.payload,
            };
        case NEW_STARSHIP:
            console.log('New_STARSHIP action.type: ', state.items);
            const highId = Math.max.apply(Math, state.items.map(function(o) { return o.id; })) + 1;
            console.log('highId: ', highId);
            action.payload.id = highId;
            //action.payload.name = action.payload.name + state.newStarshipId;
            return{
                ...state,
                items: [action.payload, ...state.items],
                newStarshipId: highId, 
                //item: action.payload,
            };
        default: 
        console.log('DEFAULT action.type: ', action.type);
            return state;
    }
}