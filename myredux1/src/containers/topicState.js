import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Topic from '../components/topic'
import *as topicAction from '../action/TopicAction'

const mapStateToProps=(state)=>{
	return {
		topic:state
	}
}

const mapDispatchToProps =(dispatch)=>{
	return{
		topicActive:bindActionCreators(topicAction,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Topic)
