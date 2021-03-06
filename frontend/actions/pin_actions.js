import * as PinApiUtil from "../util/pin_api_util";

// action types
export const RECEIVE_PINS = "RECEIVE_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const CLEAR_PIN_INDEX = "CLEAR_PIN_INDEX";
export const RECEIVE_SEARCH_PINS = "RECEIVE_SEARCH_PINS";

export const clearPinIndex = () => ({
    type: CLEAR_PIN_INDEX,
});

//action creators
const receivePins = (pins) => {
    return {
        type: RECEIVE_PINS,
        pins
    };
};

const receivePin = pin => ({
    type: RECEIVE_PIN,
    payload : pin,
});

const removePin = pinId => ({
    type: REMOVE_PIN,
    pinId
});

const receiveSearchPins = matchedpins => ({
    type: RECEIVE_SEARCH_PINS,
    matchedpins
});

// thunk action creators
//might need to add err handling arrow functions
export const fetchAllPins = (page) => dispatch => (
    PinApiUtil.fetchAllPins(page)
    .then(pins => (dispatch(receivePins(pins))
    ))
);

export const fetchPin = pinId => dispatch => (
    PinApiUtil.fetchPin(pinId).then(
        pin => dispatch(receivePin(pin))
    )
);

export const createPin = pin => dispatch => (
    PinApiUtil.createPin(pin).then(
        pin=> dispatch(receivePin(pin))
    )
);

export const updatePin = pin => dispatch => (
    PinApiUtil.updatePin(pin).then(
        pin => dispatch(receivePin(pin))
    )
);

export const deletePin = pinId => dispatch => (
    PinApiUtil.deletePin(pinId).then(
        payload => dispatch(removePin(payload.pin.id))
    )
);

export const fetchSearchPins = keyword => dispatch => (
    PinApiUtil.fetchSearchPins(keyword).then(
        matchedpins => dispatch(receiveSearchPins(matchedpins))
    )
)

//{'bear': 180}