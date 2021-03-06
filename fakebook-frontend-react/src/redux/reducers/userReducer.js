import { LOGIN_USER, LOGOUT_USER, PROFILEPIC, FETCHFRINDPROFILE } from '../actions/actions'
import jwtDecode from 'jwt-decode'

const initialState = () => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  if (token) {
    return jwtDecode(token)
  } else {
    return {
      role: "guest"
    }
  }
}

function userReducer(currentUser = initialState(), action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        id: action.id,
        role: action.role,
        name: action.name,
        profilePic: action.profile_img_url,
        

      }
    case LOGOUT_USER:
      return {
        role: "guest"
      }
    case PROFILEPIC:
      return {
        ...currentUser,
        profilePic: action.profile_img_url
      }
      case FETCHFRINDPROFILE:
        return {
          ...currentUser,
          friendid: action.friendid
        }
      
    default:
      return currentUser
  }
}


export default userReducer