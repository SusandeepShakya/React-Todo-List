import React, { useState } from "react";
import styled from "styled-components";



const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #EAE2B7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const TodoContainer = styled.div`
  width: 50%;
  height: 40rem;
  background-color: #f4f4f4;
  border : solid 1px;
  border-radius: 15px;
  box-shadow: 10px 10px 25px -5px rgba(0, 0, 0, 1);
`
const Header = styled.h1`
  color: #000000;
  background-color:#EAE2B7;
  padding: 6px 0 2px;
  margin-bottom: 10px;
  box-shadow: 0px 15px 15px -3px rgba(0, 0, 0, 0.3);
`
const InputField = styled.input`
  text-align: center;
  height: 30px;
  top: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  font-weight: 500;
  width: 60%;
  border-bottom: 2px solid ;
  outline: none;
`
const AddItems = styled.button`
  border-radius: 25px;
  border-color: transparent;
  background-color: #EAE2B7;
  color: #000000;
  font-size: 20px;
  padding : 5px;
  margin-left : 20px;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
  &:hover  {
    background-color: #20bf6b;
  }
`
const OrderedList = styled.ol`
  margin-top: 30px;
  list-style: none;
`
const ListContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: left;
align-items: center;
`
const ListItems = styled.li`
flex:10;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: #000000;
  text-transform: capitalize;
`
const DeleteItems = styled.button`
flex:3;
border-radius: 50%;
border-color: transparent;
background-color: #EAE2B7;
color: #000000;
font-size: 20px;
padding : 5px;
margin : 10px 20px;
box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
&:hover  {
  background-color: #20bf6b;
}
`
const App = () => {
  const [inputItems, setInputItems] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [clicked, setIsClicked] = useState(false);

  const handleInput = (e) => {
    setInputItems(
      e.target.value
    )
  }

  const addItem = () => {
    setTodoItems(
      (prevItems) => {
        return [...prevItems, inputItems]
      }
    )
    setInputItems("");
  }

  const deleteItems = (id) => {
    setTodoItems((prevItems) => {
      return prevItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }

  function handleClick(){
    setIsClicked((prevValue) => {
      return (!prevValue)
    });
  }

  return (
    <>
      <Container>
        <TodoContainer>
          <br />
          <Header>To DO List</Header>
          <br />
          <InputField type="text" placeholder="Add Tasks" value={inputItems} onChange={handleInput} />
          <AddItems onClick={addItem}>Add Task</AddItems>
          <p style={{margin:"10px 5px 0px 5px"}}>* click To-Do to mark as done </p>
          <OrderedList>
            {todoItems.map((item,index) => {
              return (
                <>
                  <ListContainer>
                    <ListItems style={{textDecoration: clicked ? "line-through": "none" }} key={index} onClick={handleClick} >{item}</ListItems>
                      <DeleteItems onClick={() => deleteItems(index)}>Delete Items</DeleteItems>
                  </ListContainer>
                </>
              )
            })}
          </OrderedList>
        </TodoContainer>
      </Container>
    </>
  )
};

export default App;