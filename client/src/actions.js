export const GET_RESULTS_REQUEST = 'GET_RESULTS_REQUEST';
export const GET_RESULTS_SUCCESS = 'GET_RESULTS_SUCCESS';
export const GET_RESULTS_FAILURE = 'GET_RESULTS_FAILURE';

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

export function getResults(terms) {
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