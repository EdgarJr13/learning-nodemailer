//importando o nodemailer
const nodemailer = require('nodemailer');

//importando o arquivo smtp.js que criamos para as credenciais de envio
const SMTP_CONFIG = require('./config/smtp'); 

//configurando o nodemailer
const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
    },
    tls: {
       rejectUnauthorized: false 
    }
});

//criando uma função assíncrona para configurar remetentes, título e conteúdo do e-mail que será enviado
async function run(){
    const mailSent = await transporter.sendMail({
        from: "Edgar Jr. <edgarpinheiro13@gmail.com>",
        to: ['edgarpinheiro13@gmail.com, edgarpcj@hotmail.com'],
        subject: "Testando Nodemailer",
        text: "Este e-mail está sendo enviado via NodeJS utilizando a lib 'Nodemailer' para automatizar o processo. ;)",
        html: `
        <html>
        <body>
            <strong>EU CRIEI UM ROBÔ</strong></br> para te mandar este e-mail, meu <i>cria</i>
        </body>
        </html>
        `,
    });

    console.log(mailSent);
}

run();