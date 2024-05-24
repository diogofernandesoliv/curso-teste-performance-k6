//1. Executor adequado quando desejamos que um NÚMERO ESPECÍFICO DE VUs
//complete um NÚMERO ESPECÍFICO DE ITERAÇÕES
//2. Quantidade de iterações por VU não é importante
//3. Tempo para concluir uma série de iterações é importante

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    scenarios: {
        constacts: {
            executor: 'shared-iterations',
            vus: 10,
            iterations: 200,
            maxDuration: '30s',
        },
    },
};

export default function() {
    http.get('https://test.k6.io/contacts.php');
    sleep(0.5);
}