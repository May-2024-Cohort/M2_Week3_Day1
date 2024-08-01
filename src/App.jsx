
import axios from 'axios'
import './App.css'

function App() {

  // to connect to API we need axios package

  // send get request

  // axios returns a promise
//  axios.get('https://omar-class-api.adaptable.app/students')
//  .then((allStudents)=>{
//   // console.log(allStudents.data)
//  })

//  axios.get('https://omar-class-api.adaptable.app/students/1')
//  .then((oneStudent)=>{
//   // console.log(oneStudent.data)
//  })

//  for(let i=6;i<26;i++){
//   axios.delete(`https://omar-class-api.adaptable.app/students/${i}`)
//   .then((deletedStudent)=>{
   
//   })
/* 

  axios.get('https://swapi.dev/api/people/10')
  .then((starWarsCharacter)=>{
    console.log(starWarsCharacter.data.height)
  })

  // post request
  // axios.post('https://omar-class-api.adaptable.app/students',{name:"Omar",country:"Bahrain"})
  // .then((createdStudent)=>{

  // })

  axios.put('https://omar-class-api.adaptable.app/students/21',{name:"NOT OMAR",country:"Bahrain"})
  .then((createdStudent)=>{

  })
 */

  // axios.get('https://restcountries.com/v3.1/name/switzerland')
  // .then((oneCountry)=>{
  //   console.log(oneCountry.data[0].name.common)
  // })
  // .catch((error)=>{
  //   console.log(error)
  // })

  async function getStudent(){
    const student = await axios.get('https://omar-class-api.adaptable.app/students')
    const oneStudent = await axios.get('https://omar-class-api.adaptable.app/students/1')


    console.log(student.data)
    console.log(oneStudent.data)
  }

getStudent()   /* 
   Exercise 1:

   1. Make an axios call to the following URL and get the character with the 10th id https://swapi.dev/api/people/4'

   2. in the .then() console.log the character object representing the character info

   3. BONUS: instead of console.logging the entire object console.log the height of the character
   
   */


 

  return (
    <>
     
    </>
  )
}

export default App
