import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'

const View = () => {
    var[update,setUpdate] =useState(false)
    var[selected,setSelected] =useState([])
    var[products,setProducts] =useState([])
    useEffect(()=>{
        axios.get("http://localhost:3004/products")
        .then(response=>{
        setProducts(products=response.data)
        console.log(products)
    })
        .catch(error=>console.log(error))
    },[])
    const deleteValue=(id)=>{
        console.log(id)
        axios.delete("http://localhost:3004/products/"+id)
        .then(response=>{
            alert("Successfully Deleted")
            window.location.reload(false)
        })
        .catch(error=>console.log(error))
    }
    const updateValue=(value)=>{
        setSelected(value)
        setUpdate(true)
    }
    var finalJSX =<TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {products.map((value,index)=>{
                return <TableRow>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.brand}</TableCell>
                    <TableCell>{value.quantity}</TableCell>
                    <TableCell>{value.price}</TableCell>
                    <TableCell><Button onClick={()=>deleteValue(value.id)}>Delete</Button></TableCell>
                    <TableCell><Button onClick={()=>updateValue(value)}>Update</Button></TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
</TableContainer>
if(update)
finalJSX=<Add data={selected} method ="put"/>

  return (
    finalJSX
  )
}

export default View
