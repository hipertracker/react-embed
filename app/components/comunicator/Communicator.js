import React from 'react'

const Messenger = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    propTypes: {
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string
    },
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
        // example of communication with decoupled other part of web app
        e.preventDefault();
        window.Amplify.publish('MessageFromCommunicator', this.state.message);
        this.setState({sent: true});
    },
    render() {
        const notification = this.state.sent ? <span className="alert">Message sent</span> : <span/>;
        return (
            <section>
                <form>
                    <fieldset>
                        <label>{this.props.title}</label>
                        &nbsp;
                        <input type="text"
                               style={{ width: 118}}
                               maxLength={14}
                               placeholder="Type sth..."
                               valueLink={this.linkState('message')}/>
                        <span className="help-block">{this.props.description}</span>
                        <button onClick={this.sendMessage}
                                className="btn btn-primary"
                                disabled={!this.state.message}>Submit
                        </button>
                        &nbsp;
                        <button onClick={this.clearForm}
                                disabled={!this.state.message}
                                className="btn">Clear
                        </button>
                    </fieldset>
                </form>
                {notification}
            </section>
        );
    }
});

export default Messenger;
