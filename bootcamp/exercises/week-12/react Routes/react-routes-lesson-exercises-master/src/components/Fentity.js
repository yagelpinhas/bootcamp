import React, { Component } from 'react';
import '../styles/fentity.css'
import { Link } from 'react-router-dom'
import { Redirect } from "react-router-dom";


class Fentity extends Component {
    render() {
        let fentitiesCategory=this.props.match.params.fentities
        let name =this.props.match.params.name
        const fentity = this.props.state[fentitiesCategory].filter(f => {
            return f.name.toLowerCase() === name.toLowerCase()
        })[0]
        return (
            <React.Fragment>
            {!fentity ? (
              <Redirect to="./" />
            ) : (
            <div id="creature-container">
                <h1>{fentity.name}</h1>
                <img src={fentity.imgUrl} alt=""/>
                <div className="title">Power:</div>
                <div className="power text"> {fentity.power}</div>
                <div className="other text">{fentity.other}</div>
                <Link to={`/directory/${fentitiesCategory}`}>Back</Link>
            </div>
            )}
            </React.Fragment>
        )
    }
}

export default Fentity;
