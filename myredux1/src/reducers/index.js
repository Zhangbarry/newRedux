import { combineReducers } from 'redux'
import replyListReducer from './replyListReducer'
import topicReducer from './topicReducer'

const reducer = combineReducers({
	replyListReducer,
	topicReducer
})

export default reducer