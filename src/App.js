import React, { useState } from "react"

const App = () => {

  const [typedPokemon, setTypedPokemon] = useState('')
  const [isLoading, setIsLoading] = useState(false)


function handleChange(event){
  setTypedPokemon(event.target.value)
}

function handleSubmit(event){
  event.preventDefault()
  if(!typedPokemon){
    return
  }
  setIsLoading(true)
}

  return (
    <div>
      <h1>Bem vindo à pokedex!</h1>
      <p>Digite o nome ou a ID do pokemon!</p>
      <form onSubmit={handleSubmit}>
        <input value={typedPokemon} 
               placeholder={"Nome ou ID do pokemon"} 
               onChange={handleChange}
        ></input>
        <button type="submit">
          {isLoading ? (<span>Carregando....</span>) : (<>Buscar</>)}
        </button>
      </form>
    </div>
  );
}


export default App;
