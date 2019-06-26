import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
            <div style={{textAlign:"right"}}>
            <i className="fab fa-twitter p-3"></i>
            <i className="fab fa-google-plus-g p-3"></i>
            <i className="fab fa-linkedin-in p-3"></i>
            <i className="fab fa-telegram-plane p-3"></i>
            <button type="button" className="btn btnn  mr-4 mb-2 mt-2 "> <i className="fas fa-question-circle p-1 questioncolor"></i>Help</button>
            </div>
            </div>
        )
    }
}