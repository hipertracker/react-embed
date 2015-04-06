import React from 'react'
import Communicator from 'es6!./Communicator'

class App extends React.Component {
    render() {
        return (
            <section>
                <Communicator title="Message:" description="Intercommunication example"/>
            </section>
        )
    }
}

export default App
