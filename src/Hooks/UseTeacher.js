import { useEffect, useState } from "react"

const UseTeacher = user => {
    const [teacher, setTeacher] = useState(false);
    const [teacherLoading, setTeacherLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://safe-mountain-18279.herokuapp.com/teacher/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setTeacher(data.teacher);
                    setTeacherLoading(false);
                })
        }
    }, [user])

    return [teacher, teacherLoading];
}

export default UseTeacher;