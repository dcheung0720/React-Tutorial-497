import { useState } from 'react';
import CourseList from "./CourseList";

const CoursePage = (lists, selected, toggleSelected) => {
    console.log(selected)
    return (
    <CourseList list={lists} selected={selected} toggleSelected={toggleSelected} />
  );
};

export default CoursePage;