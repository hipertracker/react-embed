import React from 'react'
import Messanger from 'es6!./Messanger'

class App extends React.Component {
    render() {
        return (
            <section>
                <Messanger title="Message:" description="Intercommunication example"/>
            </section>
        )
    }
};

export default App;
