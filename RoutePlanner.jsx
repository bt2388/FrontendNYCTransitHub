import {useState} from 'react'
import './RoutePlanner.css'

function RoutePlanner(){


   return( 
      <>      
      <h1>Route Planner</h1>
      <form>
        <label>
          Enter the Station you want to start from :
          <input type="text" name="name" />
        </label>
      </form>
      <form>
        <label>
          Enter the Station you want to be at:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </>
   )


}

export default RoutePlanner