import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    var[input,setInput] =useState(prop.data)
    console.log(prop.data)
    const inputHandler =(e)=>{
     const{name,value}=e.target
     setInput({...input,[name]:value})
    }
    const readValues= ()=>{
      console.log("clicked")
      if(prop.method==="post"){
      axios.post("http://localhost:3004/products",input)
      .then(response=>{
        alert("Successfully Added")
      })
      .catch(error=>console.log(error))
    }else if(prop.method==="put"){
      axios.put("http://localhost:3004/products/"+input.id,input)
      .then(response=>{
        alert("Updated Successfully")
        window.location.reload(false)
      })
      .catch(error=>console.log(error))
    }
    }
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <TextField label="Name" name='name' variant="outlined" value={input.name} onChange={inputHandler}/><br></br><br/>
        <Typography>{input.name}</Typography>
        <TextField label="Brand" name='brand' variant="outlined" value={input.brand} onChange={inputHandler}/><br/><br></br>
        <Typography>{input.brand}</Typography>
        <TextField label="Quantity" name='quantity' variant="outlined" value={input.quantity} onChange={inputHandler}/><br/><br></br>
        <Typography>{input.quantity}</Typography>
        <TextField label="Price" name='price' variant="outlined" value={input.price} onChange={inputHandler}/><br/><br></br>
        <Typography>{input.price}</Typography>
        <Button variant='contained' onClick={readValues}>Submit</Button>
        </div>
    )
  }

export default Add
