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


const queryClient = new QueryClient();

const Main = () =>{
  const [schedule, isLoading, error] = useJsonQuery("https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php");
  let courses = {
      Fall : [],
      Winter : [],
      Spring : []
  };
  //react State
  const [selection, setSelection] = useState(() => Object.keys(courses)[0]);
  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!schedule) return <h1>No user data found</h1>;
  
  courses["Fall"] = Object.entries(schedule.courses).filter(course => course[1].term === "Fall");
  courses["Winter"] = Object.entries(schedule.courses).filter(course => course[1].term === "Winter");  
  courses["Spring"] = Object.entries(schedule.courses).filter(course => course[1].term === "Spring"); 

  return <div className = "container">  
    {Banner(schedule.title)}
    <MenuPage terms = {Object.keys(courses)} selection = {selection} setSelection = {setSelection} ></MenuPage>
    {CourseList(courses[selection])}
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
