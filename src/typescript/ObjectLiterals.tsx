import React from 'react'

interface Person {
    fullName: string;
    age: number;
    address: Address;
}

interface Address {
    city: string;
    state: string;
}

const ObjectLiterals = () => {
  
    const person: Person = {
        fullName: 'John',
        age: 30,
        address: {
            city: 'New York',
            state: 'NY'
        }
    }
  
    return (
    <>
    <h3>
    ObjectLiterals    
    </h3>
    <code>
        <pre>
            {JSON.stringify(person, null, 2)}
        </pre>
    </code>

    </>
  )
}

export default ObjectLiterals