
const defaultState = {
  projects: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
        return {
          ...state,
          inProgress:true
        }
    case 'GET_PROJECTS_SUCCEEDED':
        console.log("SERVER PROJECTS", action.projects)
        return {
          ...state,
          projects:action.projects,
          inProgress:false
        }
    case 'GET_PROJECTS_FAILED':
        return {
          ...state,
          inProgress:false
        }
    case 'CREATE_PROJECT':
        console.log("CREATING")
        return {
          ...state,
          inProgress:true
        }
    case 'CREATE_PROJECT_SUCCEEDED':
        debugger;
        return {
          ...state,
          projects:action.projects,
          inProgress:false
        }
    case 'CREATE_PROJECT_FAILED':
        return {
          ...state,
          inProgress:false
        }
    case 'UPDATE_FIELD_PROJECT':
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};
