const getIsAuthenticated = state => state.auth.isAuthenticated;

const getAuthError = state => state.auth.error;

const getUsername = state => state.auth.user.name;

export default { getIsAuthenticated, getUsername, getAuthError };
