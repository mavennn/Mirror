import sockets from '../constants/sockets';

export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0; const
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// eslint-disable-next-line max-len,import/prefer-default-export
export const getConsultant = (socket, type, ...params) => { // (type) (type, title, vendorCode, size, price) (type, things[])
  const roomNumber = process.env.ROOM;
  const id = uuidv4();
  let query = {};
  switch (type) {
    case sockets.CALL_CONSULTANT:
      query = { id, type, roomNumber, text: sockets.CALL_TEXT };
    case sockets.BRING_THING:
      const [title, vendorCode, size, price] = params;
      query = { id, type, roomNumber, text: sockets.BRING_TEXT, title, vendorCode, size, price };
    case sockets.TO_CHECKOUT:
      const things = params;
      query = { id, type, text: sockets.TO_CHECKOUT_TEXT, roomNumber, things };
    default:
      null;
  }

  socket.emit('getConsultant', query);
}
