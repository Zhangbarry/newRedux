import React from 'react'
import './replyList.scss'

export default class ReplyList extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			data:[]
		}
	}
	componentDidMount(){
		this.props.replyAction.fetchReplyListAction()
	}
	render(){
		let constant = this.props.reply.replyListReducer
		console.log(constant)
		let htmlDom;
		if (constant === null) {
		      htmlDom = (<div/>)
		    }else{
		    	return (
		    		htmlDom = constant.data.map(item=>{
		    			return (
		    				<div key={item.Id} className="replyList">
		    					<div className='header'>
			    					<div className="title">{item.Title}</div>
			    					<img src={item.Image} className='newsImg' />
		    					</div>
		    					<div className='replyContent'>
		    						<div  dangerouslySetInnerHTML={{__html:item.Content}} />
		    					</div>
		    				</div>
		    			)
		    		})
		    	)
		    }
		return (
			<div>
				{htmlDom}
			</div>
		)
	}
}