import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./colors.css"

function ColorBox ({color}){
    const styles = {
        marginTop:"10px",
        backgroundColor: color,
        fontSize: "30px",
        height:"50px",
        width:"200px",
        borderRadius:"5px",
        boxShadow: "5px 5px 5px lightblue",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      };

    return(
        <div id="colorbox" style={styles}></div>
    )
}

const AddColor = () => {
  const [color, setColor] = useState("");
  const [colorList, setColorList] = useState(["grey", "skyblue" , "pink"])

  const styles = {
    backgroundColor: color,
    fontSize: "30px",
    marginTop:"10px",
  };

  return (

    <div id="colorInput">
      <h3> Below is format of color pallets </h3>
      {colorList.map((clr, index)=>(
        <ColorBox color={clr}/>
      ))}

      <div id="colorInput">
       <h3>If you want to add more color use below text input and add color</h3> 
      <TextField
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        id="standard-basic"
        label="Type Color"
        variant="outlined"
      /> <Button style={{marginTop:"15px", height:"40px"}} onClick={()=>setColorList([...colorList, color])} variant="outlined">Add Color</Button>

      </div>

      
    </div>
  );
};


export default AddColor;
