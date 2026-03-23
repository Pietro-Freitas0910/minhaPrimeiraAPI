// 1. Importar Express
const express = require('express');

// 2. Criar aplicação
const app = express();

// 3. Definir porta
const PORT = 3000;

// 4. Middleware para JSON
app.use(express.json());

// 5. Criar primeiro endpoint
app.get('/', (req, res) => {
    res.json({
        mensagem: '🎉 Minha primeira API funcionando!',
        status: 'sucesso',
        timestamp: new Date().toISOString()
    });
});

// 6. Endpoint de informações
app.get('/info', (req, res) => {
    res.json({
        nome: 'Minha 1° API REST',
        versao: '1.0.0',
        autor: 'Pietro Freitas'
    });
});

// 7. Endpoint com informações pessoais
app.get('/api/me', (req, res) => {
    res.json({
        nome: 'Pietro Antônio Leite de Freitas',
        curso: 'Engenharia de Software',
        hobbies: 'jogar',
        linguagens: 'Java'
    });
});

// 8. Endpoint com data e hora atual
app.get('/api/data', (req, res) => {
    const agora = new Date();

    res.json({
        dataHoraAtual: agora.toLocaleString('pt-BR'),
        timestamp: agora.toISOString()
    });
});

// 9. Endpoint com número aleatório
app.get('/api/random', (req, res) => {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    res.json({
        numero: numeroAleatorio
    });
});

// 10. Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});