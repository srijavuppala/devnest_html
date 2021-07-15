import Card from './Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Instructions</h1> 
   <ul>
      <li>build a container</li>
      <li>create a seperate function and use it as a component</li>
      <li>pass props "calory and food" and call it to main component</li>
   </ul>
    <h1>Calorie Read Only</h1>
    <div className = "cal">
     <Card name ="Pizza" number ="56"/>
     <Card name ="Burger" number ="69"/>
     <Card name ="Coke" number ="500"/>
     <Card name ="Browne" number ="180"/>
     <Card name ="Fried Rice" number ="90"/>
     <Card name ="Lassania" number ="200"/>
     <Card name ="Pani Puri" number ="10"/>

    </div>
    </div>
  );
}

export default App;
