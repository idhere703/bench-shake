import AppActionTypes from './AppActionTypes';
import AppDispatcher from './AppDispatcher';

const Actions = {
    addContact(contact) {
        AppDispatcher.dispatch({
            type: AppActionTypes.ADD_CONTACT,
            ...contact,
        });
    },
};

export default Actions;