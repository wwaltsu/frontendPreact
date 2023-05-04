import { useState, useEffect } from 'preact/hooks'

const TargetList = () => {
    const [targets, setTargets] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3001/target')
            const data = await response.json()
            setTargets(data)
        }
        fetchData()
    }, [])

    return (
        <ul>
            {targets.map((target) => (
                <li key={target.id}>
                    <h2>{target.title}</h2>
                    <div>Tapahtuu pvm: {target.startDate ? new Date(target.startDate).toLocaleDateString("fi-FI") : ""}</div>
                    <div>Loppuu pvm: {target.endDate ? new Date(target.endDate).toLocaleDateString("fi-FI") : ""}</div>
                    <div>Muistettavaa: {target.note}</div>
                </li>
            ))}
        </ul>
    )
}

export default TargetList