const initialState = {
  loading: false,
  album: [],
  error: null

}

export default function albumReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ALBUM_LOADING':
      return {
        ...state,
        loading: action.payload
      }
    case 'FETCH_ALBUM_SUCCESS':
      return {
        album: action.payload,
      }
    case 'FETCH_ALBUM_ERROR':
      return {
        error: action.payload
      }
    default:
      return state
  }

}