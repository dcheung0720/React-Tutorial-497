import logo from './logo.svg';
import './App.css';
import './Components/Banner';
import './Components/CourseList';
import Banner from './Components/Banner';
import CourseList from './Components/CourseList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useJsonQuery} from './utilities/fetch.js';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Component, useState} from "react";
import MenuPage from "./Components/MenuPage.js";
import CoursePage from './Components/CoursePage';
import Dispatcher from './Components/Dispatcher';


const queryClient = new QueryClient();

const Main = () =>{
  const [schedule, isLoading, error] = useJsonQuery("https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php");
  let courses = {
      Fall : [],
      Winter : [],
      Spring : []
  };
  //react State
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  //Modal
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (item) => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );

  const [selection, setSelection] = useState(() => Object.keys(courses)[0]);
  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!schedule) return <h1>No user data found</h1>;
  
  courses["Fall"] = Object.entries(schedule.courses).filter(course => course[1].term === "Fall");
  courses["Winter"] = Object.entries(schedule.courses).filter(course => course[1].term === "Winter");  
  courses["Spring"] = Object.entries(schedule.courses).filter(course => course[1].term === "Spring"); 

  //course definition
  return <div className = "container">  
    {Banner(schedule.title)}
    <MenuPage terms = {Object.keys(courses)} selection = {selection} setSelection = {setSelection} openModal = {openModal}></MenuPage>
    <Dispatcher courses = {courses} selected = {selected} toggleSelected = {toggleSelected} open = {open}  closeModal = {closeModal} schedule = {schedule} selection = {selection}/>
</div>;
}

const App = () =>{
  return(
    <QueryClientProvider client = {queryClient}>
      <Main/>
    </QueryClientProvider>
  );
}

export default App;
