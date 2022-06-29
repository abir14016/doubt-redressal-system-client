import { useEffect, useState } from "react"
import { useQuery } from "react-query";
import Loading from "../Pages/Shared/Loading/Loading";

const UseUsers = () => {
    const [users, setUsers] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/user`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);


    return [users, setUsers];
}

export default UseUsers;