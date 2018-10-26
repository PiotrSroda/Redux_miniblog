import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';


export default function (state = {}, action) {
  switch (action.type){
  case DELETE_POST:
  return _.omit(state, action.payload);
  case FETCH_POST:
// const post = action.payload.data
// const newState = { ...state  };  { ...state  } take all the state that we have and put it into that object that we need to return           ES5
//   newState[post.id] = post;          ES5
//   return newState           ES5
  
  
  return { ...state, [action.payload.data.id]: action.payload.data };
  case FETCH_POSTS:      
     return _.mapKeys(action.payload.data, 'id');
    
    // console.log(action.payload.data);how it usually looks [post1, post2]
    // { 4: post} ---- how it should look like
  default: 
    return state;
  }
}