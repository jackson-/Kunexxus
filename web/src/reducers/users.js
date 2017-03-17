function users(state = {}, action){
  console.log("USERS REDUCER: action.type =", action.type);
  switch(action.type){
    case 'GET_USERS':
      return state;
    case 'LOGIN':
      return [...state,
        {email: action.email, password: action.password}
      ];
    case 'SIGNUP':
      return action.users;
    default:
      return state;
  }
}

export default users;