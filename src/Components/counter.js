import React, {useState} from "react";
import { Button } from "@mui/material";
import Icon from '@mui/material/Icon'



function Counter(){
    const[like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
  
    return(
      <>
      <Button variant="outlined" onClick={()=> {setLike(like+1)}}>
       <Icon baseClassName="fa" className="fa-thumbs-up"/> Like  {like}
      </Button>
  
      <Button variant="outlined" onClick={()=> {setDislike(like-1)}}>
      Dislike {dislike}
      </Button>
      </>
    )
  }

  export default Counter;