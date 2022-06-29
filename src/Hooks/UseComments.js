import { useEffect, useState } from "react"

const UseComments = (id) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://safe-mountain-18279.herokuapp.com/comment/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [id])

    return [comments, setComments];
}

export default UseComments;