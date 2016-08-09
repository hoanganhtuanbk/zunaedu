import Dispatcher from '../dispatcher/dispatcher.js';
import Constants from '../constants/constants.js';
import { EventEmitter } from 'events';

var APIURL = '/api'
  , access_token
  , userId
  , realm;

if(sessionStorage.access_token && sessionStorage.userId){
  access_token = sessionStorage.access_token;
  userId = sessionStorage.userId;
}else if(localStorage.access_token && localStorage.userId){
  access_token = localStorage.access_token;
  userId = localStorage.userId;
}

var showErr = function(err){
  if(err.statusCode == 401){
    swal({
        title: err.name,
        text: "This login session has expired. Please login again to continue",
        type: "error",
        confirmButtonColor: "#ff2956",
        confirmButtonText: "Go to Login",
        closeOnConfirm: true
      },
      function(){
        sessionStorage.clear();
        localStorage.clear();
        window.location.href = "/login";
      });
  }else{
    swal({
        title: err.name,
        text: err.message,
        type: "error",
        confirmButtonColor: "#ff2956",
        confirmButtonText: "OK",
        closeOnConfirm: true
      },
      function(){
      });
  }
};

var create = function(endpoint, data, callback){
  $.ajax({
    method: 'POST',
    url: APIURL + endpoint,
    headers: {
      "Authorization": access_token
    },
    data: data,
    error: (config, status, error)=>{
      showErr(config.responseJSON.error);
    },
    success: (data, status)=>{
      Stores.emitChange(endpoint.split('/')[1]);
      callback(data, status);
    }
  })
};
var query = function(endpoint, filter, callback){
  var queryString = '?filter=' + encodeURI(JSON.stringify(filter));
  $.ajax({
    method: 'GET',
    url: APIURL + endpoint + queryString,
    headers: {
      "Authorization": access_token
    },
    error: (config, status, error)=>{
      showErr(config.responseJSON.error)
    },
    success: (data, status)=>{
      callback(data, status);
    }
  })
};

var findById = function(endpoint, id, callback){
  $.ajax({
    method: 'GET',
    url: APIURL + endpoint + '/' + id,
    headers: {
      "Authorization": access_token
    },
    error: (config, status, error)=>{
      showErr(config.responseJSON.error)
    },
    success: (data, status)=>{
      callback(data, status);
    }
  })
};

var update = function(endpoint, id, data, callback){
  $.ajax({
    method: 'PUT',
    url: APIURL + endpoint + '/' + id,
    data: data,
    headers: {
      "Authorization": access_token
    },
    error: (config, status, error)=>{
      showErr(config.responseJSON.error)
    },
    success: (data, status)=>{
      Stores.emitChange(endpoint.split('/')[1]);
      callback(data, status);
    }
  })
};

var deleteById = function(endpoint, id, callback){
  $.ajax({
    method: 'DELETE',
    url: APIURL + endpoint + '/' + id,
    headers: {
      "Authorization": access_token
    },
    error: (config, status, error)=>{
      showErr(config.responseJSON.error)
    },
    success: (data, status)=>{
      Stores.emitChange(endpoint.split('/')[1]);
      callback(data, status);
    }
  })
};

var getCurrentUser = function(callback){
    $.ajax({
      method: 'GET',
      url: APIURL + '/users/' + userId,
      headers: {
        "Authorization": access_token
      },
      error: (config, status, error)=>{
        showErr(config.responseJSON.error);
      },
      success: (data, status)=>{
        callback(data, status);
      }
    })
};

var CHANGE_EVENT = 'change';

class AppStores extends EventEmitter{
  emitChange(event) {
    this.emit(event);
  };
  addChangeListener(event, callback) {
    this.on(event, callback);
  };
  removeChangeListener(event, callback) {
    this.removeListener(event, callback);
  };

  getAll(endpoint, callback){
    query(endpoint, {}, callback);
  };

  find(endpoint, filter, callback) {
    query(endpoint, filter, callback);
  };

  findById(endpoint, id, callback){
    findById(endpoint, id, callback);
  };

  getCurrentUser(callback){
    $.ajax({
      method: 'GET',
      url: APIURL + '/users/' + userId,
      headers: {
        "Authorization": access_token
      },
      error: (config, status, error)=>{
        showErr(config.responseJSON.error);
        callback(null, status, error);
      },
      success: (data, status)=>{
        callback(data, status);
      }
    })
  };

  logOut(callback) {
    $.ajax({
      method: 'POST',
      url: APIURL + '/users/logout',
      headers: {
        "Authorization": access_token
      },
      error: (config, status, error)=>{
        callback(null, status, error);
      },
      success: ()=>{
        localStorage.clear();
        sessionStorage.clear();
        callback()
      }
    })
  }
  getRealm(){
    return realm;
  }

}

const Stores = new AppStores();

Dispatcher.register(function(action){
  switch (action.type){
    case Constants.CREATE:
          create(action.endpoint, action.data, action.callback);
          break;
    case Constants.DELETEBYID:
          deleteById(action.endpoint, action.id, action.callback);
          break;
    case Constants.UPDATE:
          update(action.endpoint, action.id, action.data, action.callback);
          break;
    case Constants.FIND:
          query(action.endpoint, action.filter, action.callback);
          break;
  }
});

export default Stores;
