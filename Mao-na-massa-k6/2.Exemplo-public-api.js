// Public API: Exemplo 2
//   - Buscar crocodilo por ids
// Critérios:
//   - Perfomance test
//       - Ramp up 10 VU em 10s
//       - Carga 10 VU em 10s
//       - Ramp down 0 VU em 10s
//   - Limites:
//       - Requisição com sucesso > 95%
//       - Tempo requisição p(90) < 200-- 90% das requisições menores que 200 segundos


import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

export const options = {
    stages: [
        { duration: '10s', target: 10},
        { duration: '10s', target: 10},
        { duration: '10s', target: 0}
    ],
    thresholds: { 
        checks: ['rate > 0.95'],
        http_req_duration: ['p(95) < 200']
    }
}

const data = new SharedArray('Leitura do json', function(){
    return JSON.parse(open('/dados.json')).crocodilos
});

export default function() {
    const crocodilo = data[Math.floor(Math.random() * data.length)].id;
    console.log(crocodilo);

    const BASE_URL = `https://test-api.k6.io/public/crocodiles/${crocodilo}`;

    const res = http.get(BASE_URL);

    check(res, {
        'status code 200': (r) => r.status === 200
    });

    sleep(1);
}