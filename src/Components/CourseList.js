import './CourseList.css'
const CourseList = ({list, selected, toggleSelected}) =>(
    <div className = "classes">
        {list.map(([id, courses]) => 
        <div className="card m-1 p-2" id = {`${selected.includes(id) ? 'selected' : ''}`} onClick={() => toggleSelected(id)} key = {id}> 
            <div>
                <div className = "top"><b style = {{fontSize: "25px"}}>{courses.term} {" CS "} {courses.number}</b></div>
                <div className = "middle">{courses.title}</div> 
                <hr></hr>
                <div className = "bottom">{courses.meets}</div>
            </div>
        </div>)}
    </div>
)


export default CourseList;