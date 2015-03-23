import React from 'react'
import {Amplify} from 'es6!app/config'

const Messanger = React.createClass({
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
        e.preventDefault();
        Amplify.publish('react-diamond', this.state.message);
        this.setState({sent: true});
    },
    render() {
        const notification = this.state.sent ? <span className="alert">Message sent</span> : <span/>;
        return (
            <section>
                <form>
                    <fieldset>
                        <label>{this.props.title}</label>
                        <input type="text"
                               placeholder="Type something..."
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

export default Messanger;
