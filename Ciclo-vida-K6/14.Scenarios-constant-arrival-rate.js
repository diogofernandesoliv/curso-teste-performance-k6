//1. Executor com foco em métricas como o RPS

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    scenarios: {
        constacts: {
            executor: 'constant-arrival-rate',
            duration: '30s',
            rate: 30, //30 iteraçôes a cada 30 segundos
            timeUnit: '1s',
            preAllocatedVUs: 50,
        },
    },
};

export default function() {
    http.get('https://test.k6.io/contacts.php');
}