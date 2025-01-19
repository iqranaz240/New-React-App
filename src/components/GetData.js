import React, { useState } from 'react'
import axios from 'axios';

function GetData() {
    
    const getData = async() => {
        const data = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(data.data);
    }

    const postData = async() => {
        const data = {
            title: 'New Todo',
            completed: false,
        }

        const res = await axios.post('https://jsonplaceholder.typicode.com/todos', data);
        console.log(res)
    }

    const patchData = async() => {
        const updatedData = {
            title: 'New Updated Todo',
            completed: false,
        }

        const res = await axios.put('https://jsonplaceholder.typicode.com/todos/5', updatedData);
        console.log(res)
    }

    const deleteData = async() => {

        const res = await axios.delete('https://jsonplaceholder.typicode.com/todos/1');
        console.log(res)
    }

  return (
    <div>
        <h1>GetData</h1>
        <button onClick={getData}>Get Data</button>
        <br></br>
        <br></br>
        <button onClick={postData}>Post Data</button>
        <br></br>
        <br></br>
        <button onClick={patchData}>Patch Data</button>
        <br></br>
        <br></br>
        <button onClick={deleteData}>Dalete Data</button>
    </div>
  )
}

export default GetData