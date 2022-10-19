import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoursePage from "./CoursePage.js"
import Navigation from "./Navigation";
import UserEditor from "../UserEditor.js";
import { useProfile } from '../utilities/profile';

const Dispatcher = ({courses, selected, toggleSelected, open, closeModal, schedule, selection}) => {
  const fall = courses["Fall"]
  const winter = courses["Winter"]
  const spring = courses["Spring"]
  const [profile, profileLoading, profileError] = useProfile();
  if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
  if (profileLoading) return <h1>Loading user profile</h1>;
  if (!profile) return <h1>No profile data</h1>;
  return(
  <BrowserRouter>
    {Navigation()}
    <Routes>
      <Route path="/" element={CoursePage(courses[selection], selected, toggleSelected, open, closeModal, schedule, profile)}></Route>
      <Route path= "/edit/:id" element={<UserEditor/>}></Route>
    </Routes>
  </BrowserRouter>)
};

export default Dispatcher;