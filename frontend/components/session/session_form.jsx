import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearErrors = this.handleClearErrors.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleClearErrors(e) {
        e.preventDefault();
        this.props.clearSessionErrors();
    }
    componentDidMount() {
        this.props.clearSessionErrors();
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    demoLogin(e) {
        e.preventDefault();
        this.setState({
            username: "poppy",
            email: "poppy@aa.com",
            password: "123321"
        },()=>{
            this.props.processForm(this.state) 
            .then(this.props.closeModal)
        })
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Your Inspirations!
          <br />
          Please {this.props.formType} or {this.props.otherForm}
         <div onClick={this.props.closeModal} className="close-x"></div>
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>Username:
                                <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Email:
                                <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                                <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        <button className="demo-btn" onClick={this.demoLogin}>
                            Demo Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;
