import { useEffect, useState } from "react"

const UseAllComments = () => {
    const [allComments, setAllComments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/comment')
            .then(res => res.json())
            .then(data => setAllComments(data))
    }, [])

    return [allComments, setAllComments];
}

export default UseAllComments;