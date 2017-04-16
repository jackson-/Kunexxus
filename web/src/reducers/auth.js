import agent from '../agent';

export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
        return {
          ...state,
          inProgress: true,
        };
    case 'LOGIN_SUCCEEDED':
      localStorage.setItem('token', action.user.token);
      localStorage.setItem('email', action.user.email);
      localStorage.setItem('timestamp', Date.now());
      return {
        ...state,
        inProgress: false,
        user:action.user
      }
    case 'LOGIN_FAILED':
        debugger;
        return {
          ...state,
          inProgress: false,
          error:action.message
        }
    case 'REGISTER':
      localStorage.setItem('token', action.payload.user.token)
      localStorage.setItem('email', action.payload.user.email)
      localStorage.setItem('timestamp', Date.now())
      return {
        ...state,
        email:action.payload.user.email,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      };
    case 'UPDATE_FIELD_AUTH':
      return { ...state, [action.key]: action.value };
    case 'ASYNC_START':
      if (action.subtype === 'LOGIN' || action.subtype === 'REGISTER') {
        return { ...state, inProgress: true };
      }
      break;
    default:
      return state;
  }
};
