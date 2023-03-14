import React from 'react'
import Person from './Person'

function NameList() {
    const persons=[{
        id:1,
        name:'Ranjith',
        age:23,
        skill:'react'
    },
    {
        id:2,
        name:'Sai',
        age:24,
        skill:'java'
    },
    {
        id:3,
        name:'Rahul',
        age:25,
        skill:'aws'
    }
]

    const personList=persons.map(person=>
        <Person key={person.id} person={person} />)
  return (
    <div>
        {
            personList
        }

    </div>
  )
}

export default NameList