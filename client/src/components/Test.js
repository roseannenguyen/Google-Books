import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Test = () => {

    const [message, setMessage] = useState ('');

    useEffect(() => {
        axios.get('/test').then(result => {
            setMessage(result.data.message)
        })
    }, [])
}

export default Test