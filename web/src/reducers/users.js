import axios from 'axios';

function users(state = [], action){
  console.log("USERS REDUCER: action.type =", action.type);
  let config = {header: {'Access-Control-Allow-Origin': '*'}}
  switch(action.type){
    case 'GET_USERS':
      return state;

    case 'LOGIN':
      return state;

    case 'SIGNUP':
        //make api call here
        console.log("ACTION", action)
        config['email'] = action.email;
        config['password'] = action.password;
        axios.post(`http://localhost:3000/register`, config).then((result) => {
          console.log("result", result);
          state = [
            ...state,
            {
              id: `${Date.now()}`,
              email: action.email,
              password: action.password
            }
          ];
          return state;
        }).catch((err)=>{
          console.log(err);
        });


    default:
      return state;
  }
}

export default users;