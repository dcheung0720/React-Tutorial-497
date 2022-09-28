const CourseList = (list) =>(
    <div>
        {Object.entries(list).map(([id, courses]) => <p key = {id}> {courses.term} {courses.number}: {courses.title}</p>)}
    </div>
)


export default CourseList;