import './CourseList.css'
const CourseList = (list) =>(
    <div className = "classes">
        {Object.entries(list).map(([id, courses]) => 
        <div className="card m-1 p-2" key = {id}> 
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