export const NAVIGATE_TO_HOME = "NAVIGATE_TO_HOME";
export const NAVIGATE_TO_ABOUT = "NAVIGATE_TO_ABOUT";
export const NAVIGATE_TO_PROJECTS = "NAVIGATE_TO_PROJECTS";
export const NAVIGATE_TO_RESUME = "NAVIGATE_TO_RESUME";
export const NAVIGATE_TO_CONTACT = "NAVIGATE_TO_CONTACT";

interface NavigateHome{
    type: typeof NAVIGATE_TO_HOME;
}
interface NavigateAbout{
    type: typeof NAVIGATE_TO_ABOUT;
}
interface NavigateProjects{
    type: typeof NAVIGATE_TO_PROJECTS;
}
interface NavigateResume{
    type: typeof NAVIGATE_TO_RESUME;
}
interface NavigateContact{
    type: typeof NAVIGATE_TO_CONTACT;
}

export type NavigationDispatch = NavigateHome | NavigateAbout | NavigateProjects | NavigateResume | NavigateContact;