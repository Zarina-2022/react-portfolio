import React from 'react'


function ex(): React.JSX.Element {
  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    alert('Buttona tikla')
  }


const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
event.preventDefault()
}

  return (
    <>
      <button onClick={onClickHandler}>Add</button>
      <input
        onClick={(event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
          alert('Kayit oldu')
        } }
      >
        Save
      </input>
          <form onSubmit={handleSubmit} action="">

          </form>


    </>
  )
}

export default ex

/*

(parameter) event

*/
