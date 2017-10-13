
const initialState = { user:  35, location: {}, adventure: {}, CurrentStop: {} }

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return Object.assign({}, state, {
        user: action.User
      });
    case 'SET_LOCATION':
      return Object.assign({}, state, {
        location: action.loc,
      });
    case 'SET_ADVENTURE':
      return Object.assign({}, state, {
        adventure: action.adv,
      });
    case 'SET_CURRENTSTOP':
      return Object.assign({}, state, {
        CurrentStop: action.stop
      });
    default:
      return state;
      
  }
}