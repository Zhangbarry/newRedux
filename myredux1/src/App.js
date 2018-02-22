import React from 'react'
import ReplyList from './containers/ReplyListState'
import Topic from './containers/topicState'
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom'
import './app.scss'

const App =()=>{
		return (
			<Router>
				<div className="app">
					<ul className='nav'>
						<li>
							<NavLink exact activeClassName='active' to='/'>话题</NavLink>
						</li>
						<li>
							<NavLink activeClassName='active' to='/topic'>留言</NavLink>
						</li>
					</ul>
					<div className='content'>
						<Route exact path="/" component={ReplyList}/>
						<Route path="/topic" component={Topic}/>
					</div>
				</div>
			</Router>
		)
}

export default App