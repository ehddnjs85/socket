const net =  require('net');

const ip = '127.0.0.1';
const port = 3000;

const socket = new net.Socket();
socket.connect({host:ip, port:port}, function () {
    console.log('서버와 연결 성공');

    socket.write('Hello Socket Server\n');
    socket.end();

    socket.on('data', function () {
        console.log('서버가 보냄 : ',
        chunk.toString());
    });

    socket.on('end', function () {
        console.log('서버 연결 종료');
    });
});