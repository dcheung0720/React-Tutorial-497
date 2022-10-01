import logo from './logo.svg';
import './App.css';
import './Components/Banner';
import './Components/CourseList';
import Banner from './Components/Banner';
import CourseList from './Components/CourseList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useJsonQuery} from './utilities/fetch.js';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';


const queryClient = new QueryClient();

const Main = () =>{
  const [schedule, isLoading, error] = useJsonQuery("https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php");
  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!schedule) return <h1>No user data found</h1>;
  return <div className = "container">  
    {Banner(schedule.title)}
    {CourseList(schedule.courses)}
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
