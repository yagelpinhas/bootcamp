import React, { Component } from 'react';
import '../styles/about.css'

export class About extends Component {

    render() {
        return (
            <div id="about">
                <div>
                    Find out about:
                </div>
                <div>
                    {this.props.items.map(i => {
                        return <div>{i}</div>
                    })}
                </div>
            </div>
        );
    }
}

export default About;