require('dotenv').config();

class Env {
  getRoomNumber() {
    const roomNumber = process.env.ROOM;
    if (roomNumber === undefined) {
      throw new Error('Отсутствует конфигурация номера комнаты');
    }
    return roomNumber.toString();
  }

  getServer() {
    const serverAddress = process.env.SERVER_ADDRESS;
    if (serverAddress === undefined) {
      throw new Error('Отсутствует конфигурация IP адреса');
    }
    return serverAddress.toString();
  }

  getPort() {
    const serverPort = process.env.SERVER_PORT;
    if (serverPort === undefined) {
      throw new Error('Отсутствует конфигурация порта сервера');
    }
    return serverPort.toString();
  }
}

const env = new Env();

<<<<<<< HEAD
export default env;
=======
export default env;
>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a
