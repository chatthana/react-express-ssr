export const createPost = post => {
  return {
    type: 'CREATE_POST',
    post
  }
}

export const activatePost = index => {
  return {
    type: 'ACTIVATE_POST',
    index
  }
}