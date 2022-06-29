import { useEffect, useState } from "react"

const UseUser = email => {
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(`https://safe-mountain-18279.herokuapp.com/user/${email}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [email]);

    return [user, setUser];
}

export default UseUser;