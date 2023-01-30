import React from 'react'

function About(props) {
  return (
    <>
    {
      props.Alerting && <div style={{marginBottom :'-20px',paddingTop : '45px'}}>
      <div className="alert alert-warning alert-dismissible fade show" role="alert" >
         <div style={{textAlign :"center" }}> <strong>{ props.Alerting.message}</strong></div> 
          </div>
          </div>
     } 
       

    <div className="fullabout" style={props.styling} >
    <div className='container' style={{paddingTop:"70px",display:'block', height:'100vh',marginLeft:'60px'}}>
      <h2>Features of this App</h2>
      <h4>Textutils is a website to alter your text format and spacing</h4>
      <h4>It has features like convert to uppercase, lowercase, remove extra spaces, clear text</h4>
      <h4>This website includes Dark mode</h4>
      <h4>It uses
        <ul>
          <li>useState</li>
          <li>react-router</li>
          <li>components</li>
          <li>and many more....</li>
        </ul>
      </h4>
    </div>

</div>
</>
  )
}

export default About
