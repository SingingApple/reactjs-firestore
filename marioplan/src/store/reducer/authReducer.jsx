const initState = {
  authError: null,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login fail");
      return {
        ...state,
        authError: "Login Failed",
      };
    case "LOGIN_SUCCESS":
      console.log("Login successful");
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("SignOut success");
      return {
        state,
      };
    case "SIGNUP_SUCCESS":
      console.log("SignUp success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("SignUP error");
      return { ...state, authError: action.err.message };
    default:
      return state;
  }
};
export default authReducer;
