import React from 'react'

const ReactBridge =  window.parent.ReactBridge;

const ExampleForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState() {
        return {
            message: null,
            sent: false
        };
    },
    clearForm(e) {
        e.preventDefault();
        this.setState({message: null, sent: null});
    },
    sendMessage(e) {
        e.preventDefault();
        ReactBridge.publish('react-diamond', this.state.message);
        this.setState({sent: true});
    },
    render() {
        let styles = {
            info: {
                display: this.state.sent ? 'inline' : 'none'
            }
        };
        return (
            <section>
                <form onSubmit={this.sendMessage}>
                    <fieldset>
                        <label>Message</label>
                        <input type="text" placeholder="Type something..." valueLink={this.linkState('message')}/>
                        <span className="help-block">Example of intercommunication</span>
                        <button type="submit" className="btn btn-primary" disabled={!this.state.message}>Submit</button>
                        &nbsp;
                        <button onClick={this.clearForm} disabled={!this.state.message} className="btn" >Clear</button>
                    </fieldset>
                </form>
                <div style={styles.info}>Message sent</div>
            </section>
        );
    }
});

export default ExampleForm;