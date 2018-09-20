import React from 'react'

class NameCard extends React.Component {

    render() {
        const {name, number, isHuman, tags} = this.props

        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    <li>{number}</li>
                    <li>{isHuman ? '人类' : '外星生物'}</li>
                </ul>
                <hr/>
                <p>
                    {tags.map(
                        (tag, index) => <span key={index}>{tag}</span>
                    )}
                </p>
            </div>
        )
    }

}

export default NameCard