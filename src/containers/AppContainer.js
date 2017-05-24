import AppView from '../views/AppView';
import { Container } from 'flux/utils';
import AppStore from '../data/AppStore';

function getStores() {
    return [
        AppStore,
    ];
}

function getState() {
    return {
        app: AppStore.getState(),
    };
}

export default Container.createFunctional(AppView, getStores, getState);