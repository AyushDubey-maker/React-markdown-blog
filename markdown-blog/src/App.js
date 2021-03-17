import './App.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import NewArticle from "./New"
import Blogdata from './Blogdata'
function App() {
  return (
    <div className="App">
      <Router>
     
     <Switch>
       <Route path ="/new">
        
         <NewArticle/>
       </Route>
     <Route path="/">
       
       <Blogdata/>
       </Route>
       </Switch>
     </Router>
     
    
    </div>
  );
}

export default App;
