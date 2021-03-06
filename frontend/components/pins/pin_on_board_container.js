import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PinIndex from './pin_index';
//import { fetchBoardPins, clearPinIndex } from '../../actions/pin_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    debugger
    const boardId = ownProps.match.params.boardId;
    const currentUser = state.session.currentUserId || {};
    const type = 'Board';
    return (
        {
            type,
            boardId,
            currentUser,
        }
    )       
};

const mdp = dispatch => ({
    clearPinIndex: () => dispatch(clearPinIndex()),
    //fetchPins: (id, page) => dispatch(fetchBoardPins(id, page)),
    openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
});

export default withRouter(connect(msp, mdp)(PinIndex));