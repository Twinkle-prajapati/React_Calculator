
import React, { useState } from 'react'
import { Button, Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



export default function Calculator() {
const[input,setInput]=useState('')

const handleButtonClick=(val)=>{
    if(val === 'AC')
    {
        setInput('')
    }
    else if(val === 'DEL')
    {
        setInput(input.slice(0,-1))
    }
    else if(val === '=')
    {
        setInput(eval(input).toString())
    }

}


    const buttonstyle = {
        width : "70px",
        height : "50px",
        fontSize : "1.5em",
        marginBottom : "6px"
    }

  return (
    <Container className='d-flex justify-content-center align-items-center vh-100'>
    <Card style={{width:"22rem"}}>
        <Card.Body>
        <InputGroup className="mb-3">
        <Form.Control className='py-3' placeholder="0" value={input} readOnly/>
      </InputGroup>


      <div>
        <table style={{width:"100%"}}>
        <tr>
        <td><Button style={buttonstyle} onClick={()=>handleButtonClick('AC')}>AC</Button></td>
        <td><Button style={buttonstyle} onClick={()=>handleButtonClick('DEL')}>DEL</Button></td>
        <td><Button style={buttonstyle} value='%' onClick={(e)=>setInput(input + e.target.value)}>%</Button></td>
        <td><Button style={buttonstyle} value='/' onClick={(e)=>setInput(input + e.target.value)}>/</Button></td>
        </tr>

        <tr>
        <td><Button style={buttonstyle} value='7' onClick={(e)=>setInput(input + e.target.value)}>7</Button></td>
        <td><Button style={buttonstyle} value='8' onClick={(e)=>setInput(input + e.target.value)}>8</Button></td>
        <td><Button style={buttonstyle} value='9' onClick={(e)=>setInput(input + e.target.value)}>9</Button></td>
        <td><Button style={buttonstyle} value='*' onClick={(e)=>setInput(input + e.target.value)}>*</Button></td>
        </tr>


        <tr>
        <td><Button style={buttonstyle} value='4' onClick={(e)=>setInput(input + e.target.value)}>4</Button></td>
        <td><Button style={buttonstyle} value='5' onClick={(e)=>setInput(input + e.target.value)}>5</Button></td>
        <td><Button style={buttonstyle} value='6' onClick={(e)=>setInput(input + e.target.value)}>6</Button></td>
        <td><Button style={buttonstyle} value='-' onClick={(e)=>setInput(input + e.target.value)}>-</Button></td>
        </tr>

        <tr>
        <td><Button style={buttonstyle} value='1' onClick={(e)=>setInput(input + e.target.value)}>1</Button></td>
        <td><Button style={buttonstyle} value='2' onClick={(e)=>setInput(input + e.target.value)}>2</Button></td>
        <td><Button style={buttonstyle} value='3' onClick={(e)=>setInput(input + e.target.value)}>3</Button></td>
        <td><Button style={buttonstyle} value='+' onClick={(e)=>setInput(input + e.target.value)}>+</Button></td>
        </tr>


        <tr>
        <td><Button style={buttonstyle} value='00' onClick={(e)=>setInput(input + e.target.value)}>00</Button></td>
        <td><Button style={buttonstyle} value='0' onClick={(e)=>setInput(input + e.target.value)}>0</Button></td>
        <td><Button style={buttonstyle} value='.' onClick={(e)=>setInput(input + e.target.value)}>.</Button></td>
        <td><Button className='bg-danger border-0' style={buttonstyle} onClick={()=>handleButtonClick('=')}>=</Button></td>
        </tr>

        </table>
      </div>
        </Card.Body>
    </Card>
    </Container>
  )
}


