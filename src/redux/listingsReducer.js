import listingsService from '../services/listingsService';

const listingsReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_LISTINGS':
            return action.data;
        default:
            return state;
    }
};

export const initListings = () => {
    return async dispatch => {
       const listings = await listingsService.getAll(); 
       dispatch({
           type: 'INIT_LISTINGS',
           data: listings,
       });
    };
};

export default listingsReducer;