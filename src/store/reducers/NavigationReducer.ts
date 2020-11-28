import { NavigationDispatch, NAVIGATE_TO_HOME, NAVIGATE_TO_ABOUT, NAVIGATE_TO_PROJECTS, NAVIGATE_TO_RESUME, NAVIGATE_TO_CONTACT } from "../actions/NavigationTypes"

interface DefaultStateI{
    page: string;
}

const defaultState: DefaultStateI = {
    page: 'HOME'
}

export default (state: DefaultStateI = defaultState, action: NavigationDispatch) => {
    switch(action.type){
        case NAVIGATE_TO_HOME:
            return Object.assign({}, state, {page: 'HOME'});
        case NAVIGATE_TO_ABOUT:
            return Object.assign({}, state, {page: 'ABOUT'});
        case NAVIGATE_TO_PROJECTS:
            return Object.assign({}, state, {page: 'PROJECTS'});
        case NAVIGATE_TO_RESUME:
            return Object.assign({}, state, {page: 'RESUME'});
        case NAVIGATE_TO_CONTACT:
            return Object.assign({}, state, {page: 'CONTACT'});
        default:
            return state;
    }
}