import * as Actions from './actions';

const initialState = {
  results: [],
  isFetching: false,
  isFetchingReviews: false,
  modalShow: false,
  currentItem: {},
  currentReviews: '',
  error: null
}

export function goodReads(state=initialState, action) {
  switch(action.type) {
    case Actions.GET_RESULTS_SUCCESS: 
      return {
        ...state,
        results: action.data.GoodreadsResponse.search.results.work,
        isFetching: false
      }
    case Actions.GET_REVIEWS_SUCCESS:
      return {
        ...state,
        currentReviews: action.data.GoodreadsResponse.book.reviews_widget,
        isFetchingReviews: false
      }
    case Actions.GET_RESULTS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case Actions.GET_REVIEWS_REQUEST:
    return {
      ...state,
      isFetchingReviews: true,
      error: null
    }
    case Actions.GET_RESULTS_FAILURE:
    case Actions.GET_REVIEWS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case Actions.SHOW_MODAL:
      return {
        ...state,
        modalShow: true,
        currentItem: action.data.best_book
      }
    case Actions.HIDE_MODAL:
      return {
        ...state,
        modalShow: false
      }
    default:
      return state
  }
}