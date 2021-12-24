// iframe.js

import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export class IFrame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mountNode: null
        }
        this.setContentRef = (contentRef) => {
            this.setState({
                mountNode: contentRef?.contentWindow?.document?.body
            })
        }
    }

    render() {
        const { children, ...props } = this.props
        const { mountNode } = this.state
        return (
            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d96743.25988892588!2d-74.16163504463654!3d40.735033160790664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x89c252e1c5ec0cef%3A0xb3f3b437c5d7f286!2sAeropuerto%20Internacional%20Libertad%20de%20Newark%2C%203%20Brewster%20Rd%2C%20Newark%2C%20NJ%2007114!3m2!1d40.6895314!2d-74.1744624!4m5!1s0x89c259ae15b2adcb%3A0x7955420634fd7eba!2sPenn%20Station%2C%20Nueva%20York!3m2!1d40.750568!2d-73.99351899999999!5e0!3m2!1ses-419!2sus!4v1640373085211!5m2!1ses-419!2sus" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            // <iframe
            //     {...props}
            //     ref={this.setContentRef}
            // >
            //     {mountNode && createPortal(children, mountNode)}
            // </iframe>
        )
    }
}