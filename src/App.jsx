import Counter from "./Counter"
import Users from "./Users"
import Comments from "./Comments"

 function App() {

  function basicClick(num){
    alert(5+num)
  }
   
  const handleClick = ()=>{
    alert('button clicked')
  }

  const finalClick=()=>{
    
  }


  

  return (

<div>

  <div>
    <Comments></Comments>

  </div>










  <div>
    <Users></Users>
    
  </div>







      <div>
      <h1>EVENT handler check</h1>
      <button onClick={handleClick}>click me</button>
      <button onClick={()=>{alert('button clicked by arrow')}}>click me</button>
      <button onClick={()=>basicClick(5)}>hello btn</button>

      <button onClick={()=>{console.log('hello')}}>final btn</button>
    </div>

    <div>
      <Counter></Counter>
    </div>
    </div>
    
  )
}

















export default App
