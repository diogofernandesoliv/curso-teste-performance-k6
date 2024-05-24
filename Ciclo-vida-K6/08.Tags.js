//Tags podem ser utilizadas em conjunto com Groups
import {group, check } from 'k6';
import http from 'k6/http';

export const options = {
    vus: 1,
    duration: '3s',
    tags: {
        name:'meu-test'
    },
    //Esse limite seria aplicado apenas as que possuem a tag
    thresholds:{
        'http_req_duration{tipo:buca-todos}': ['p(95)< 500']
    }
}

const id = 7;

export default function () {
    group('exemple post', function () {
        const res = http.get('https://test-api.k6.io/public/crocodiles/', {
            tags:{
                tipo: "busca-todos"
            }
        });

        check(res, {
            'is status 200': (r) => r.status === 200,
        });
    });


}