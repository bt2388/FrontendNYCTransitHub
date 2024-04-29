import { useEffect, useState } from "react"
import './route.css'
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import 'bootstrap/dist/css/bootstrap.min.css';

function Favorites(){

   return( 
      <>
         <h1>Favorite Routes Here</h1>
         <nav className="navbar bg-dark">
            <div className="container-fluid">
               <span className="appName">
                     React User Authentication</span>
            </div>
         </nav>
         <form>
         <label>
            Enter the starting Route you want updates from :
            <input type="text" name="name" value={Station} onChange={(e)=> setStation(e.target.value)}/>
         </label>
         <input type="submit" value="Submit" />
         </form>
         <LoginButton />
         <LogoutButton />
      </>
   )


}


export default Favorites;
