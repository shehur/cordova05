var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var botao = document.getElementById('botao');
        var print = document.getElementById('print');
        botao.addEventListener('click', () => {
            print.innerText = 'Botão acionado!';
            alert('Botão acionado!');
        });
    }
};

app.initialize();