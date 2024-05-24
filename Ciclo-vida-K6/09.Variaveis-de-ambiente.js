//Finalidades
//01.Fornecer uma variável de ambientepara o script. - Uma URL, Token, nome arquivo 
//02.Realizar configurações do escopo de option.

import http from 'k6/http';
import { sleep } from 'k6';

export default function(){
    //'https://test-api.k6.io/public/crocodiles/'
    const BASE_URL = __ENV.URL;

    const res = http.get(BASE_URL);

    sleep(1);
}