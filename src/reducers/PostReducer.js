export default (state = [], action) => {
  switch(action.type) {
    case 'CREATE_POST':
      return [
        ...state,
        Object.assign({}, action.post)
      ]
    case 'ACTIVATE_POST':
      return state.map(post => 
        (post.title === action.index) ? {title: post.title, active:true} : post
      )
    default:
      return state;
  }
}