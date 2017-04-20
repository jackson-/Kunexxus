
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
        console.log('LOGIN FAILED');
        return {
          ...state,
          inProgress: false,
          error:action.message
        }
    case 'REGISTER':
      debugger;
      // localStorage.setItem('token', action.payload.user.token)
      // localStorage.setItem('email', action.payload.user.email)
      // localStorage.setItem('timestamp', Date.now())
      return {
        ...state,
        inProgress: true,
      };
    case 'REGISTER_SUCCEEDED':
      debugger;
      localStorage.setItem('token', action.user.token)
      localStorage.setItem('email', action.user.email)
      localStorage.setItem('timestamp', Date.now())
      return {
        ...state,
        user:action.user,
        inProgress: false,
      };
    case 'REGISTER_FAILED':
        console.log('REGISTER FAILED');
        return {
          ...state,
          inProgress: false,
          error:action.message
        }
    case 'UPDATE_FIELD_AUTH':
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};
