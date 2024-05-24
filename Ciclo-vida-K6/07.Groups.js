//Transação - solicitação ou grupo de solicitações
//Criar usuário e fazer login é um exemplo.
//Groups são uma forma de organizar scripts!

import { check, group } from 'k6';
import http from 'k6/http';

export const options = {
    vus: 4,
    duration: '5s',
    thresholds: {
        'http_req_duration{group:::requisição por id}': ['p(95) < 2000']
    }
}

export default function(){
    //Busca todos os crocodilos
    group('requisição todos os crocodilos', function(){
        const response1 = http.get('https://test-api.k6.io/public/crocodiles/');
        check(response1, {
            'status code 200 get all': (r) => r.status === 200
        });
    });
   

    //Busca todos os crocodilos por id
    group('requisição por id', function(){
        const response2 = http.get('https://test-api.k6.io/public/crocodiles/1/');
        check(response2, {
            'status code 200 get id': (r) => r.status === 200
        });
    });
}