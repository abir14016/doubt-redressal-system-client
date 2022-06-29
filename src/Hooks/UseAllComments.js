import { useEffect, useState } from "react"

const UseAllComments = () => {
    const [allComments, setAllComments] = useState([]);
    useEffect(() => {
        fetch('https://safe-mountain-18279.herokuapp.com/comment')
            .then(res => res.json())
            .then(data => setAllComments(data))
    }, [])

    return [allComments, setAllComments];
}

export default UseAllComments;