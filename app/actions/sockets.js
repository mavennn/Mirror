export const SET_SOCKET = 'SET_SOCKET';
export const SET_QUERY = 'SEND_QUERY';

export const setSocket = socket => ({
  type: 'SET_SOCKET',
  payload: socket
});

export const setQuery = data => ({
  type: SET_QUERY,
  payload: data
});
