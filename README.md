# Teste para vaga na LinkApi

Este é um teste para uma vaga de desenvolvedor na LinkApi.

Neste desafio, deveria se criar oportunidades (negócios) na plataforma Pipedrive. Em seguida, deveria se inserir estas oportunidades como pedidos na plataforma Bling.

Com isto, deveria se criar um banco de dados MongoDB, e inserir estas oportunidades por dia e valor total.

Por fim, deveria se retornar, através de um endpoint, os dados consolidados no MongoDB.

## Endpoints

Para se realizar os testes, foram criados 3 endpoints:

-- **localhost:3887/cadpedidos/pedidos**: Esse endpoint cadastra cada oportunidade como produto no Bling, e depois fecha um pedido com todas as oportunidades.

-- **localhost:3887/db/inseredb**: Que vai inserir no bando de dados MongoDB todos os pedidos registrados no Bling.

-- **localhost:3887/db/getoportunidades**: Retorna todos os pedidos do Bling que foram adicionados ao banco de dados do MongoDB

## Rodando a aplicação

Para se rodar a aplicação, deve-se, ao estar na pasta /src, utilizar o comando:

> node app.js