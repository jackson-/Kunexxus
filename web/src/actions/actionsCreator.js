export function createThing(parameter){
	return{
		type: 'CREATE_THING',
		parameter
	};
}

export function login(email, password){
  return {
    type: 'LOGIN',
    email,
    password
  };
}

export function signup(users){
  return {
    type: 'SIGNUP',
    users
  }
}