module.exports = ((io) => {

    const ChatSockets = {
        connection: () => {
            const sockets = io.sockets;
            sockets.on('connection', function (client) {
                client.on('send-server', function (data) {
                    const msg = "<b>" + data.nome + ":</b> " + data.msg + "<br>";
                    client.emit('send-client', msg);
                    client.broadcast.emit('send-client', msg);
                });
            });
        }
    }

    return ChatSockets.connection()
})