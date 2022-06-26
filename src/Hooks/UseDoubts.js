import { useEffect, useState } from "react"

const UseDoubts = () => {
    const [doubts, setDoubts] = useState([]);
    const url = 'http://localhost:5000/doubt';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDoubts(data))
    }, [])

    return [doubts, setDoubts];
}

export default UseDoubts;