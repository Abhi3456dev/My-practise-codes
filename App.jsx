"COMPONENTS"
import React from "react";
import Card from "./Card";
const App = () => {
  const user=[
  {
    "name": "Alice Johnson",
    "age": 28,
    "height": 165,
    "address": "123 Maple Street",
    "city": "New York",
    "image": "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    "name": "Brian Smith",
    "age": 35,
    "height": 180,
    "address": "456 Oak Avenue",
    "city": "Chicago",
    "image": "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    "name": "Carla Ruiz",
    "age": 22,
    "height": 158,
    "address": "789 Pine Lane",
    "city": "Los Angeles",
    "image": "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    "name": "David Lee",
    "age": 40,
    "height": 172,
    "address": "321 Birch Road",
    "city": "Seattle",
    "image": "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    "name": "Emily Zhang",
    "age": 30,
    "height": 168,
    "address": "654 Cedar Court",
    "city": "Austin",
    "image": "https://randomuser.me/api/portraits/women/5.jpg"
  }
]

  
  return (
    
    <>
    <div> 
      <div className="p-10">
        {user.map(function(elem){
          return <Card user={elem.image}/>
        })}
      </div>
    </div>
   
    </>
  );
};

export default App;