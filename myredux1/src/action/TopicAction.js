const request=()=>(
	{
		type:'TOPIC_REQUEST'
	}
)
const received=(data)=>(
	{
		type:'TOPIC_RECEIVED',
		data
	}
)

const receiveError=()=>(
	{
		type:'TOPIC_RECEIVEERROR'
	}
)

const fetchTopic=()=>(dispatch)=>{
	dispatch(request())
	const url ='http://106.14.32.113:8085/api/Interactive/GetUserLeaveMsgById_new_z'
	return fetch(url).then(response=>{
		return response.json()
	}).then(res=>{
		return dispatch(received(res.Data))
	}).catch(err=>{
		return dispatch(receiveError())
	})
}
export const fetchTopicAction=()=>dispatch=>{
	return dispatch(fetchTopic())
}
