import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup,clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        //navLink: <Link to="/login">Please log In</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        clearSessionErrors: () => dispatch(clearSessionErrors()),
        demoLogin: demoUser => dispatch(login(demoUser)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);