// A reducer takes in two things:

// 1- The Action (info about what happened)

// 2- copy of current state

let posts = (state = [], action) => {
  console.log(state, action);
  return state;
}

export default posts;