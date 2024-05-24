# curso-teste-performance-k6
Teste de performance com K6 do Marlo Henrique de Lima Oliveira

# Comandos utilizados

k6 run -o csv=resultado.csv .\07.Groups.js

## 09. Variáveis de ambiente
k6 run -e
k6 run --env

 k6 run --env URL=https://test-api.k6.io/public/crocodiles/ 09.Variaveis-de-ambiente.js --duration 5s --vus 10

k6 run --env URL=https://test-api.k6.io/public/crocodiles/ 09.Variaveis-de-ambiente.js --stage 5s:5,5s:5,5s:0
