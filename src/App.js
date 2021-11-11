import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import CardDetails from './components/CardDetails/CardDetails';
import CardList from './components/CardList/CardList';
import NotFound from './components/NotFound/NotFound'
import Comment from './components/Comment/Comment';
import Avatars from './components/Avatars/Avatars';
// import CommentAll from './components/CommentAll/CommentAll'

function App() {
  return (
    <div className='appjs'>
      {/* <Header></Header> */}

      {/* <CardList /> */}

      <Router>
        <Switch>

          <Route exact path="/">
            {/* <Comment/> */}
            <CardList />
          
          </Route>
          <Route path="/posts">
            {/* <h1>Theis is posts router</h1> */}
            <CardList />


          </Route>
          <Route path="/post/:postId">
            <CardDetails />
            
       

            {/* <Comment/> */}
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
