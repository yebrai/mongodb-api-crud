"use client"

import { useState } from 'react'

function AddForm() {

  const [titleInput, setTitleInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")

  const handleTitleChange = (event) => setTitleInput(event.target.value)
  const handleDescriptionChange = (event) => setDescriptionInput(event.target.value)
  const handleSubmit = async (event) => {

  event.preventDefault()


    const newTodo = {
      title: titleInput,
      description: descriptionInput,
    }

    try {
      
      //await axios.post("http://localhost:5005/api/todos", newTodo)
      // si JS llega a este punto es porque el ToDo se ha creado correctamente

      //pasamos el objeto como parametro
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      console.log(response)

      const responseJson = await response.json()
      //tenemos que indicarle a react, que la lista se ha actualizado

      // Manualmente actualizaremos la lista desde el server

    } catch (error) {
      console.log(error);
    }

    console.log(newTodo)


  }
  return (
    <div>
      <form >

      <label htmlFor="title">Titulo:</label>
      <input  value={titleInput} type="text" name="title" onChange={handleTitleChange}/>
      <br />
      
      <label htmlFor="description">descripcion</label>
      <input value={descriptionInput} type="text" name="description" onChange={handleDescriptionChange}/>
      <br />

      <button onClick={handleSubmit}>Agregar</button>

      </form>
    </div>
  )
}

export default AddForm