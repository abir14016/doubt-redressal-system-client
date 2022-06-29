import { useEffect, useState } from "react"
import { useQuery } from "react-query";
import Loading from "../Pages/Shared/Loading/Loading";

const UseTeacher = user => {
    const [teacher, setTeacher] = useState(false);
    const [teacherLoading, setTeacherLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/teacher/${email}`, {
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


    // const email = user?.email;
    // const { data: teacher, isLoading, refetch } = useQuery('email', () => fetch(`http://localhost:5000/teacher/${email}`, {
    //     method: 'GET',
    //     headers: {
    //         'content-type': 'application/json',
    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()))
    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    return [teacher, teacherLoading];
}

export default UseTeacher;