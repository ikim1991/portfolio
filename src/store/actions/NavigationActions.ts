import { NAVIGATE_TO_HOME, NAVIGATE_TO_ABOUT, NAVIGATE_TO_PROJECTS, NAVIGATE_TO_RESUME, NAVIGATE_TO_CONTACT, NavigationDispatch } from './NavigationTypes';

export const navigateHome = () => ({ type: NAVIGATE_TO_HOME });
export const navigateAbout = () => ({ type: NAVIGATE_TO_ABOUT });
export const navigateProjects = () => ({ type: NAVIGATE_TO_PROJECTS });
export const navigateResume = () => ({ type: NAVIGATE_TO_RESUME });
export const navigateContact = () => ({ type: NAVIGATE_TO_CONTACT });