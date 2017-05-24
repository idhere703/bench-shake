import AppActionTypes from './AppActionTypes';
import AppDispatcher from './AppDispatcher';

const Actions = {
    addContact(email) {
        AppDispatcher.dispatch({
            type: AppActionTypes.ADD_CONTACT,
            email,
        });
    },
};

export default Actions;