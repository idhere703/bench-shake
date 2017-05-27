import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import AppActionTypes from './AppActionTypes';
import AppDispatcher from './AppDispatcher';
import Contact from './Contact';

let _counter = 1;
const Counter = {
    increment() {
        return 'id-' + String(_counter++);
    },
};

class AppStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case AppActionTypes.ADD_CONTACT:
                // Don't add contacts with missing data.
                if (!action.email || !action.name || action.phone) {
                    return state;
                }

                const id = Counter.increment();
                return state.set(id, new Contact({
                    id,
                    email: action.email,
                    name: action.name,
                    phone: action.phone,
                }));

            default:
                return state;
        }
    }
}

export default new AppStore();