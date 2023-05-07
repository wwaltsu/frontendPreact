import { useState } from 'preact/hooks'

const TargetForm = () => {
    const [target, setTarget] = useState({
        title: '',
        startDate: '',
        endDate: '',
        note: '',
    })
    const [targetData, setTargetData] = useState([])

    const handleTitleChange = (event) => {
        const { value } = event.target
        setTarget((prevTarget) => ({ ...prevTarget, title: value }))
    }

    const handleStartDateChange = (event) => {
        const { value } = event.target
        setTarget((prevTarget) => ({ ...prevTarget, startDate: value }))
    }

    const handleEndDateChange = (event) => {
        const { value } = event.target
        setTarget((prevTarget) => ({ ...prevTarget, endDate: value }))
    }

    const handleNoteChange = (event) => {
        const { value } = event.target
        setTarget((prevTarget) => ({ ...prevTarget, note: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3001/target', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(target),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Form data sent successfully!')
                    setTarget({
                        title: '',
                        startDate: '',
                        endDate: '',
                        note: '',
                    })
                    fetch('http://localhost:3001/target')
                        .then((response) => response.json())
                        .then((data) => setTargetData(data))
                        .catch((error) =>
                            console.error('Error getting latest data:', error)
                        )
                } else {
                    console.error('Failed to send form data.')
                }
            })
            .catch((error) => {
                console.error('Error sending form data:', error)
            })
    }

    return (
        <div>
            <h1>Target Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={target.title}
                        onChange={handleTitleChange}
                    />
                </label>
                <label>
                    Start Date:
                    <input
                        name="startDate"
                        value={target.startDate}
                        onChange={handleStartDateChange}
                    />
                </label>
                <label>
                    End Date:
                    <input
                        name="endDate"
                        value={target.endDate}
                        onChange={handleEndDateChange}
                    />
                </label>
                <label>
                    Note:
                    <input
                        type="text"
                        name="note"
                        value={target.note}
                        onChange={handleNoteChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            <h2>Target Data</h2>
            <ul>
                {targetData.map((target) => (
                    <li key={target.id}>
                        <div>{target.title}</div>
                        <div>{target.startDate}</div>
                        <div>{target.endDate}</div>
                        <div>{target.note}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TargetForm