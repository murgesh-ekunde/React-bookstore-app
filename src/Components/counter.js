import React, {useState} from "react";
import { Button } from "@mui/material";



function Counter(){
    const[like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
  
    return(
      <div style={{marginTop:"10px"}}>
      <Button variant="outlined" onClick={()=> {setLike(like+1)}}>
       Like  {like}
      </Button>
  
      <Button style={{marginLeft:"10px"}} variant="outlined" onClick={()=> {setDislike(like-1)}}>
      Dislike {dislike}
      </Button>
      </div>
    )
  }

  export default Counter;