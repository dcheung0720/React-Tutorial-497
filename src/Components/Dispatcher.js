import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoursePage from "./CoursePage.js"
import Navigation from "./Navigation";
import UserEditor from "../UserEditor.js";

const Dispatcher = ({courses, selected, toggleSelected, open, closeModal, schedule, selection}) => {
  const fall = courses["Fall"]
  const winter = courses["Winter"]
  const spring = courses["Spring"]
  return(
  <BrowserRouter>
    {Navigation()}
    <Routes>
      <Route path="/" element={CoursePage(courses[selection], selected, toggleSelected, open, closeModal, schedule)} />
      <Route path= "/edit/:id" element={UserEditor(courses, selected)}>Form</Route>
    </Routes>
  </BrowserRouter>)
};

export default Dispatcher;