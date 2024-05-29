# curso-teste-performance-k6
Teste de performance com K6 do Marlo Henrique de Lima Oliveira

# Comandos utilizados

k6 run -o csv=resultado.csv .\07.Groups.js

## 09. Variáveis de ambiente
k6 run -e
k6 run --env

 k6 run --env URL=https://test-api.k6.io/public/crocodiles/ 09.Variaveis-de-ambiente.js --duration 5s --vus 10

k6 run --env URL=https://test-api.k6.io/public/crocodiles/ 09.Variaveis-de-ambiente.js --stage 5s:5,5s:5,5s:0

## 09. Flag para habilitar o DASHBOARD K6 (GIT BASH)
K6_WEB_DASHBOARD=true k6 run 2.Bonus-dashboard-saida-k6.js
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=relatorio.html k6 run 2.Bonus-dashboard-saida-k6.js

## Executar via Grafana Cloud K6
k6 cloud .\3.Bonus-grafana-cloud-k6.js

execution: cloud
script: .\3.Bonus-grafana-cloud-k6.js
output: https://diogofernandesoliv.grafana.net/a/k6-app/runs/2814698

k6 run --out cloud .\3.Bonus-grafana-cloud-k6.js

 execution: local
        script: .\3.Bonus-grafana-cloud-k6.js
        output: cloud (https://diogofernandesoliv.grafana.net/a/k6-app/runs/2814732)  

## Conteúdo Métricas WEB e Core Web Vitals
https://dev.to/marlo2222/entendendo-as-metricas-do-k6-parte-3-m1g 
https://web.dev/explore/learn-core-web-vitals?hl=pt-br