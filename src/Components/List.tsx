import React from 'react';
import { useState, useEffect } from 'react';


const List: React.FC = () => {
  let [ fruit, setFruit ] = useState<string[]>([]);
  let [ inputFruit, setInputFruit ] = useState('');

  useEffect(() => {
    console.log(inputFruit)
  }, [inputFruit]);
  
  const handleSmoothie = () => {
    //let updatedFruits = [ ...fruit, newFruit];
    //setFruit(updatedFruits);
  }
  const addInputFruit = (e:Event) => {
      console.log(e)
  }

  return (
    <div>
      <input placeholder="Enter a fruit" onChange={addInputFruit(e)}/>
      <button onClick={handleSmoothie}>Smoothie!</button>
      <ul>{ fruit.length != 0 && fruit.map((item: string) => <li>{item}</li>) }</ul>
    </div>
  );
}

export default List;
