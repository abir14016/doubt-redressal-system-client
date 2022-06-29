import { useEffect, useState } from "react"

const UseDoubts = () => {
    const [doubts, setDoubts] = useState([]);
    const url = 'https://safe-mountain-18279.herokuapp.com/doubt';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDoubts(data))
    }, [])

    return [doubts, setDoubts];
}

export default UseDoubts;