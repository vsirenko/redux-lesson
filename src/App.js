import React, {Fragment} from 'react'
import{useDispatch, useSelector} from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
 
   const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
   
   }
   const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
   
  }

  return (
    <div className='app'> 
      <div className='cash'>
      {cash}
      </div>
     <div className="btn-all">
        <button className='btn' onClick={() => addCash(Number(prompt()))}>Добавить</button>
        <button className='btn' onClick={() => getCash(Number(prompt()))}>Отянть</button>
     </div>
    </div>
  )
}

export default App
