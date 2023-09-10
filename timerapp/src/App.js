
import './App.css'

function App() {

  const currDate = new Date()
  let currTime = currDate.getHours()

let greeting = '';
let cssStyle = {
  

}

if(currTime >= 1 && currTime < 12){
  greeting = 'Good Morning'
  cssStyle.color = 'green'
}else if(currTime >=12 && currTime < 17){
  greeting = 'Good After Noon'
  cssStyle.color = 'orange'

}else if(currTime >=17 && currTime < 20){
  greeting = 'Good Evening'
  cssStyle.color = 'blue'

}else{
  greeting = 'Good Night'
  cssStyle.color = 'black'

}

  return (
    <div className="App">
      <h1>Hello, <span style={cssStyle}>{greeting}</span></h1>
    </div>
  );
}

export default App;
