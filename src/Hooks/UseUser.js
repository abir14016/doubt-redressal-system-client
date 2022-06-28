import { useEffect, useState } from "react"

const UseUser = email => {
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [email]);

    return [user, setUser];
}

export default UseUser;