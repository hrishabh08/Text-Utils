
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import { useState } from 'react';
import About from './component/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

{/*Only two synxtac change b/w js and jsx 
  className inplace of class
  htmlFor inplace of for */}
function App() {

  const[btntxt,setbtntxt] = useState('Dark Mode');

  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      message:message,
      type : type ,
    })

    setTimeout(() =>{
      setAlert(null);
    },2000);
    };

  const [myStyle ,setmyStyle] = useState({
    color:'black',
    backgroundColor:'white',
      });

      const toggleMode = () => {
        if(myStyle.color === 'white')
        {
        setmyStyle({
          color:'black',
          backgroundColor:'white',
        })
        {/* 
       setbtntxt('Dark Mode');
       showAlert('Light mode enabled','success');
      */}
      setbtntxt('Dark Mode')
      showAlert('Light mode enabled','success');
   
      }
       
        else{
          setmyStyle({
            color:'white',
            backgroundColor:'#222',
          })
           {/* 
          setbtntxt('Light Mode');
          showAlert('Dark mode enabled','success');
          */}
          setbtntxt('Light Mode');
          showAlert('Dark mode enabled','success');
          
        }
      }
  
 
  
  
  return (
    <>
    <div className="App">
  
     <Navbar title="TextUtils" textbtn={btntxt} toggleMode={toggleMode}/>
      {/*<About/>*/}

      <div className='main' >
     <Router>
      
      <Switch>
          <Route path="/about">
            <About styling={myStyle} Alerting={alert}/>
           </Route> 
          <Route path="/" >
            <Textform heading="Enter text to analyse" styling={myStyle} Alerting={alert}/>    
          </Route>  
        </Switch>
      </Router>
      </div>
     </div>
   
    </>
  );
}

export default App;
