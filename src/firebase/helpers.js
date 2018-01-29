export const emailToUsername = (value) =>
  return value.replace(/^(.+)@(.+)$/g,'$1').replace(/\./g, '')
