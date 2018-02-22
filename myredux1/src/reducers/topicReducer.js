const topicReducer = (state=null,action)=>{
	switch(action.type){
		case 'TOPIC_REQUEST':
		return state
		case 'TOPIC_RECEIVED':
		return {
			data:action.data
		}
		case 'TOPIC_RECEIVEERROR':
		return state
		default:
		return state
	}
}
export default topicReducer