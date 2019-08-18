import io from 'socket.io-client';

const socket = io.connect('http://localhost:3123');

export const getConsultant = (room) => {
    socket.emit('getConsultant', room);
}


