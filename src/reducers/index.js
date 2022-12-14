import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import AuthReducer from './authReducer'
import StreamReducer from './streamReducer'

export default combineReducers({
  auth: AuthReducer,
  form: formReducer,
  streams: StreamReducer,
})
