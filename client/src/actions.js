export const GET_RESULTS_REQUEST = 'GET_RESULTS_REQUEST';
export const GET_RESULTS_SUCCESS = 'GET_RESULTS_SUCCESS';
export const GET_RESULTS_FAILURE = 'GET_RESULTS_FAILURE';
export const GET_REVIEWS_REQUEST = 'GET_REVIEWS_REQUEST';
export const GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS';
export const GET_REVIEWS_FAILURE = 'GET_REVIEWS_FAILURE';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';


export function getResultsRequest() {
  return {
    type: GET_RESULTS_REQUEST,
  }
}

export function getResultsSuccess(data) {
  return {
    type: GET_RESULTS_SUCCESS,
    data,
  }
}

export function getResultsFailure(error) {
  return {
    type: GET_RESULTS_FAILURE,
    error
  }
}

export function getReviewsRequest() {
  return {
    type: GET_REVIEWS_REQUEST,
  }
}

export function getReviewsSuccess(data) {
  return {
    type: GET_REVIEWS_SUCCESS,
    data
  }
}

export function getReviewsFailure(error) {
  return {
    type: GET_REVIEWS_FAILURE,
    error
  }
}

export function showModal(data) {
  return {
    type: SHOW_MODAL,
    data
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  }
}

export function getInitialResults(terms) {
  return dispatch => {
    dispatch(getResultsRequest())

    fetch('/api/results?q=' + terms)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`)
        }
        
        return response.json()
      })
      .then(json => {
        dispatch(getResultsSuccess(json))
      })
      .catch(error => {
        dispatch(getResultsFailure(error))
      })
  }
}

export function getReviews(bookId) {
  return dispatch => {
    dispatch(getReviewsRequest())

    fetch('/api/reviews?id=' + bookId)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`)
        }

        return response.json()
      })
      .then(json => {
        dispatch(getReviewsSuccess(json))
      })
      .catch(error => {
        dispatch(getReviewsFailure(error))
      })
  }
}