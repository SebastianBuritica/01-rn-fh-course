import React from 'react'

const BasicTypes = () => {
  
const name: string = 'John Doe';
const age: number = 45;
const isMarried: boolean = true;
  
const skills: string[] = ['HTML', 'CSS', 'JS', 'TS'];

  return (
<>
    
    <h3>
        BasicTypes
    </h3>
    
    <p>
    {name}, {age}, {isMarried ? 'Yes' : 'No'}   
    </p>
    {skills.join(', ')} 
</>
  )
}

export default BasicTypes