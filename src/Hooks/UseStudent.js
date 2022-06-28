import { useEffect, useState } from "react"

const UseStudent = user => {
    const [student, setStudent] = useState(false);
    const [studentLoading, setStudentLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/student/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setStudent(data.student);
                    setStudentLoading(false);
                })
        }
    }, [user])

    return [student, studentLoading];
}

export default UseStudent;