# ByteBankAlura

Nesse projeto foi feito um sistema basico de transferencia e extrato com base no curso Alura

Para inicializar o banco local é nescessario:
 1 - npm install -g json-server
 2 - cd dados (entre na pasta com os dados do banco)
 3 - json-server --watch db.json

Caso não funcione ainda, verifique se o LocalHost gerado pela etapa 3 sejá igual ao valor da variavel url no caminho src\app\services\transferencia.service.ts, caso não sejá, copie o localHost gerado e cole na variavel url.
