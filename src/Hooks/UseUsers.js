import { useEffect, useState } from "react"

const UseUsers = () => {
    const [users, setUsers] = useState({});
    useEffect(() => {
        fetch(`https://safe-mountain-18279.herokuapp.com/user`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);


    return [users, setUsers];
}

export default UseUsers;