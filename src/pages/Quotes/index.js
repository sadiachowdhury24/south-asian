import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



const Quotes = () => {
    return (
 <>
   

<body>

        
	<section class="main">  
  <h2 id = "quotesheader"> here are some quotes to help you feel motivated for the day!</h2>
    
      <div class="mb-wrap mb-style-2">  
      {/* 1st row */}
      <div className = "row">
   
          {/* 1st col */}
          <div className = "col">
          <blockquote >  
          <p>  If you don't know where are you going, any road will get you there</p>
           </blockquote>
          </div>

      {/* 2nd col */}
        <div className = "col">
        <blockquote >  
          <p>  Believe you can, and you are halfway there</p>
        </blockquote>
      {/* 3rd col */}
        </div>
        <div className = "col">
        <blockquote >  
          <p> Sometimes we are tested not to show our weaknesses, but to discover your strengths</p>
        </blockquote>
        </div>
 
    </div>
      
   
    <div className = "row">
   
         <div className = "col">
         <blockquote>  
          <p>  You did not come this far to only come this far</p>
        </blockquote>
         </div>
         <div className = "col">
         <blockquote>  
          <p>  There is a blessing in the storm</p>
        </blockquote>
         </div>
         <div className = "col">
         <blockquote>  
          <p>  You are stronger than you know</p>
        </blockquote>
         </div>

    

    </div>
     
     <div className = "row">
     
         <div className = "col">
         <blockquote>  
          <p> Great things never come from comfort zones </p>
        </blockquote>
         </div>
         <div className = "col">
         <blockquote>  
          <p>  It is going to be hard, but that does not mean it is impossible</p>
        </blockquote>
         </div>
         <div className = "col">
         <blockquote>  
          <p>  It is okay if healing takes longer than expected</p>
        </blockquote>
         </div>

   

     </div>
     
        
 
      

      </div>
    
      

  </section>

</body>
    
</>
       
      
    )
}

export default Quotes

