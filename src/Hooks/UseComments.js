import { useEffect, useState } from "react"

const UseComments = (id) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/comment/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [id])

    return [comments, setComments];
}

export default UseComments;