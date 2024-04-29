import React from "react";
import { useState } from "react";


export default function SimpleMap(){

  const [Station, setStation] = useState("a")
  return (
    <>
    <h1>Home</h1>
    <div>
      <form>
        <label>
          Enter the Station you want updates from :
          <input type="text" name="name" value={Station} onChange={(e)=> setStation(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    
    </>
  );
}
