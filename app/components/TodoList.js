import Link from "next/link"
import { useEffect, useState } from "react"


function TodoList() {

    const navigate = useNavigate()
  
    const [ todos, setTodos ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)
  
    useEffect(() => {
      getData()
    }, []) // ComponentDidMount
  
    const getData = async () => {
      try {
        const response = await fetch("/api", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo),
          });
        console.log(response)
        setTodos(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        navigate("/error")
      }
    }
  
    // if ( isLoading === true ) {
    if ( isLoading ) {
      return <h3>...buscando</h3>
    }
  
    return (
      <div>
        <hr />
        <h3>Lista de To-Do</h3>
  
        {todos.map((eachTodo) => {
          return (
            <div key={eachTodo._id}>
              <li>
                <Link to={`/todos/${eachTodo._id}/details`}>{eachTodo.title}</Link>
              </li>
            </div>
          )
        })}
      </div>
    );
  }
  
  export default TodoList;