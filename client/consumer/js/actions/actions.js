import Dispatcher from '../dispatcher/dispatcher.js';
import Constants from '../constants/constants.js';

export default {
  create(endpoint, data, callback){
    Dispatcher.dispatch({
      type: Constants.CREATE,
      endpoint: endpoint,
      data: data,
      callback: callback
    })
  },
  findById(endpoint, id, callback) {
    Dispatcher.dispatch({
      type: Constants.FINDBYID,
      endpoint: endpoint,
      id: id,
      callback: callback
    })
  },
  find(endpoint, filter, callback) {
    Dispatcher.dispatch({
      type: Constants.FIND,
      endpoint: endpoint,
      filter: filter,
      callback: callback
    })
  },
  deleteById(endpoint, id, callback){
    Dispatcher.dispatch({
      type: Constants.DELETEBYID,
      endpoint: endpoint,
      id: id,
      callback: callback
    })
  },
  update(endpoint, id, data, callback){
    Dispatcher.dispatch({
      type:  Constants.UPDATE,
      endpoint: endpoint,
      id: id,
      data: data,
      callback: callback
    })
  }
}

