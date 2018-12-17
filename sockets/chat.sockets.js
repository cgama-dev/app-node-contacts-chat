const crypto = require('crypto')

module.exports = ((io) => {

    const ChatSockets = {
        connection: () => {
            const sockets = io.sockets;
            const md5 = crypto.createHash('md5')
            sockets.on('connection', function (client) {
                const session = client.request.session
                const usuario = session.usuario

                console.log(session.usuario)

                client.on('send-server', function (data) {
                    const msg = "<b>" + usuario.nome + ":</b> " + data.msg + "<br>";

                    if (client.sala) {
                        const data = { email: usuario.email, sala: client.sala };
                        client.broadcast.emit('new-message', data);
                        // sockets.in(client.sala).emit('send-client', msg);
                        // sockets.in(client.sala).emit('send-client', msg);
                        // --- Conversando com todos
                        // client.broadcast.emit('send-client', msg);
                        // client.emit('send-client', msg);
                    }
                });

                client.on('join', function (sala) {
                    if (sala) {
                        sala = sala.replace('?', '')
                    } else {
                        const timestamp = new Date().toString()
                        const md5 = crypto.createHash('md5')
                        sala = md5.update(timestamp).digest('hex')
                    }

                    client.sala = sala

                    client.join(client.sala)
                })

                client.on('disconnect', function () {
                    client.leave(client.sala);
                });
            });


        }
    }

    return ChatSockets.connection()
})