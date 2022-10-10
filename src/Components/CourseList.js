import './CourseList.css'
import { hasConflict} from '../utilities/times.js';

const CourseList = ({list, selected, toggleSelected}) =>{
    return(
    <div className = "classes">
        {list.map(([id, courses]) => {
        const isSelected = selected.includes(id);
        const isDisabled = !isSelected && hasConflict(courses, list.filter(l => selected.includes(l[0])).map(l => l[1]));
        const style = {
            backgroundColor: isDisabled? 'lightgrey' : isSelected ? 'lightgreen' : 'white'
        };
        return(
        <div className="card m-1 p-2" style = {style}  onClick={isDisabled ? null : () => toggleSelected(id)} key = {id}> 
            <div>
                <div className = "top"><b style = {{fontSize: "25px"}}>{courses.term} {" CS "} {courses.number}</b></div>
                <div className = "middle">{courses.title}</div> 
                <hr></hr>
                <div className = "bottom">{courses.meets}</div>
            </div>
        </div>)})}
    </div>)
}



export default CourseList;