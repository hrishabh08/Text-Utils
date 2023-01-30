import React,{useState} from 'react'
import './Textform.css'


export default function Textform(props) {

  const[text,setText] = useState('Enter Text');
    
    const Uppercase = () =>{
        console.log('clicked');
        let newtext= text.toUpperCase()
        setText(newtext);
    }

    const Lowercase = () =>{
      console.log('clicked');
      let newtext= text.toLowerCase()
      setText(newtext);
  }

    const handle = (event) =>{
        console.log('handling event');
        setText(event.target.value);
    }

    const Clear = () =>{
      setText('');
    }

    const RemoveSpace = () =>{
      let newtxt = text.split(/[ ]+/);
      setText(newtxt.join(" "));
    }

    

  return (
    <>
    {
    props.Alerting && <div style={{marginBottom :'-20px',paddingTop : '45px'}}>
    <div className="alert alert-warning alert-dismissible fade show" role="alert" >
       <div style={{textAlign :"center" }}> <strong>{ props.Alerting.message}</strong></div> 
        </div>
        </div>
     }
   
    <div className="fullcontainer"  style={props.styling}>
      <div className='container' >
        <div className='first'>
          <h1>{props.heading}</h1>
         
        </div>
          
        <div className='mb-3'></div>
        <textarea className="form-control" value={text} id="myBox" onChange={handle} rows="8"></textarea>

        <div style={{padding :10 ,}}>
          <button className="btn" onClick={Uppercase} style={{}}>Convert to uppercase</button>
          <button className="btn" onClick={Lowercase} style={{}}>Convert to lowercase</button>
          <button className="btn" onClick={Clear} style={{}}>Clear Text</button>
          <button className="btn" onClick={RemoveSpace} style={{}}>Remove extra spaces</button>
        </div>
      </div>

      <div className='container'>
        <h1>Your text summary</h1>
        <p>Text has {text.split(/\s+/).length} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>

    </div>


    </>
   
  )
}
