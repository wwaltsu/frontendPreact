import { h } from 'preact'
import { useState } from 'preact/hooks'

let TargetForm = () => {
    const [target, setTargetData] = useState({
        title: '',
        startDate: '',
        endDate: '',
        note: ''
    })


    return (
        <form onSubmit={submitForm}>
            Title
            <input
                class="input"
                placeholder="Title"
                value={target.title}
                onChange={(event) => setTargetData({ ...target, title: event.currentTarget.value })}
            />
            Start Date
            <input
                class="input"
                placeholder="YYYY-MM-DD"
                value={target.startDate}
                onChange={(event) =>
                    setTargetData({ ...target, startDate: event.currentTarget.value })
                }
            />
            End Date
            <input
                class="input"
                placeholder="YYYY-MM-DD"
                value={target.endDate}
                onChange={(event) => setTargetData({ ...target, endDate: event.currentTarget.value })}
            />
            Notes
            <input
                class="input"
                placeholder="Notes"
                value={target.note}
                onChange={(event) => setTargetData({ ...target, note: event.currentTarget.value })}
            />
            <button class="button" type="submit">
                Save
            </button>
        </form>
    )
}

export default TargetForm