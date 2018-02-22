import React from 'react'
import './topic.scss'

export default class Topic extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.props.topicActive.fetchTopicAction()
	}
	render(){
		let topicData = this.props.topic.topicReducer
		let htmlTopic
		
		if(topicData === null){
			htmlTopic =(<div/>)
		}else{
			console.log(topicData.data,4444)
			htmlTopic = topicData.data.map(topic=>{
				let htmlReply
				if(topic.Reply==="null"){
					htmlReply=(<div>等待回复</div>)
				}else{
					htmlReply = (<div>{topic.Reply}</div>)
				}
				return (
					<div className='topic' key={topic.ID}>
						<div className='header'>
							<img src={topic.headimgurl} className='headImg' alt="notFound" />
							<div className='headName'>{topic.nickname}</div>
						</div>
						<div className='time'>{topic.CreateTime}</div>
						<div className='topicContent'>{topic.Question}</div>
						<div className='reply'>
							<div className='log'>官方回复:</div>
							<div className='replyDetail'>
								{htmlReply}
							</div>
						</div>
						
						
					</div>
				)
			})
		}
		
		return (
			<div>
				{htmlTopic}
			</div>
		)
	}
}
