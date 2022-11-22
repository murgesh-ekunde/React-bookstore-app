import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const AddColor = () => {
  const [color, setColor] = useState("");
  const [colorList, setColorList] = useState(["grey", "skyblue" , "pink"])

  const styles = {
    backgroundColor: color,
    fontSize: "30px",
    marginTop:"10px"
  };

  return (
    <div id="colorInput">
      <TextField
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        id="standard-basic"
        label="Type Color"
        variant="outlined"
      /> <Button style={{marginTop:"15px", height:"40px"}} onClick={()=>setColorList([...colorList, color])} variant="outlined">Add Color</Button>

      {colorList.map((clr)=>(
        <ColorBox color={clr}/>
      ))}
      
    </div>
  );
};

function ColorBox ({color}){
    const styles = {
        marginTop:"10px",
        backgroundColor: color,
        fontSize: "30px",
        height:"50px",
        width:"200px",
        borderRadius:"5px",
        boxShadow: "5px 5px 5px lightblue"
      }
    return(
        <div style={styles}></div>
    )
}

export default AddColor;
