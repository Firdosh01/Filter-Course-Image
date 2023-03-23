import React from 'react'
import Card from './Card';

const Cards = (props) => {

  let courses = props.courses;
  console.log("Printing data");

  function getCourses() {
    let allCourses = [];
    Object.values(courses).forEach(array => {
      array.forEach(coursData => {
        allCourses.push(coursData)
      })
      
    });
    return allCourses;
  }
  
  return (
    <div>
      {
        getCourses().map( (course) => (
          <Card key={course.id} course = {course}/>
        ))
      }
    </div>
  )
}

export default Cards
