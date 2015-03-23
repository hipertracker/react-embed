import React from 'react'
import Messenger from 'es6!./Messenger'

class App extends React.Component {
    render() {
        return (
            <section>
                <Messenger title="Message:" description="Intercommunication example"/>
            </section>
        )
    }
};

export default App;
