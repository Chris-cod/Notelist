import React, {useEffect, useState} from 'react'
//import notes from '../assets/data'
import {useParams, Link} from "react-router-dom"
import {ReactComponent as Arrowleft} from '../assets/arrow-left.svg'



const NotePage = () => {
    const params = useParams()
    let noteId = params.id

    //let note = notes.find(note => note.id === Number(noteId))
    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [noteId])

    let getNote = async () => {
        let response = await fetch (`http://localhost:8000/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to= "/" >
                        <Arrowleft />
                    </Link>
                </h3>
            </div>
            <textarea value={note?.body}>

            </textarea>
        </div>
    )
}

export default NotePage
