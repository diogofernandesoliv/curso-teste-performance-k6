//1.Número específico de VUs seja executado em um período especificado de tempo

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    scenarios: {
        constacts: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
        },
    },
};

export default function() {
    http.get('https://test.k6.io/contacts.php');
    sleep(0.5);
}