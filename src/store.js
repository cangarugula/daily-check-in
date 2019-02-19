import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'

// action types

const GET_DATA = 'GET_DATA'

// action creator

export const getData = (data) => ({type: GET_DATA, data})


// thunks

export const loadData = () => {
  return (dispatch) => {
    axios.get("/") // api route here
    // .then(response => response.data) // deconstruct data from the payload
    // dispatch action creator with the data
  }
}

// reducer

const reducer = (state = [], action) => {
  switch(action.type){
    case GET_DATA:
      state = action.data
    default: return state
  }
}


const store = createStore(reducer, applyMiddleware(logger,thunk))

export default store
