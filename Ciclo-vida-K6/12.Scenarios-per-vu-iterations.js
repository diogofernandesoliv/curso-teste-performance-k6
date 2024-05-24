//1. Número específico de VUs para completar o mesmo número fixo de iterações
//2. Particionar dados de teste entre as VUs

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    scenarios: {
        constacts: {
            executor: 'per-vu-iterations',
            vus: 10,
            iterations: 20,
            maxDuration: '30s',
        },
    },
};

export default function() {
    http.get('https://test.k6.io/contacts.php');
    sleep(0.5);
}