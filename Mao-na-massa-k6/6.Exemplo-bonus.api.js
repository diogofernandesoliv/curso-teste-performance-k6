// Critérios:
//   - Realizar consulta a API de listagem de crocodilos
//e busca por id de crocodilos
//   - É esperado um RPS de 200 REQ/S para a API de listagem de
//crocodilos durante 30 seg
//   - Para a busca por id, o sistema deve atender 50 usuários onde
//cada usuário realiza até 20 slicitações em até 1 min
//     - Usuários par devem realizar busca ao crocodilo de ID 2
//     - Usuários ímpar devem realizar busca ao crocodilo de ID 1
//  - Ambos os testes devem ser executados simultaneamente
//https://test-api.k6.io/public
import http from 'k6/http';

export const options = {
    scenarios:{
        listar:{
            executor: 'constant-arrival-rate',
            exec: 'listar',
            duration: '30s',
            rate: 200,
            timeUnit: '1s',
            preAllocatedVus: 150,
            gracefulStop: '10s',
            tags: {test_type: 'listagem_de_crocodilos'},
        },
        buscar:{
            executor: 'per-vu-iterations',
            exec: 'buscar',
            vus: 50,
            iterations: 20,
            maxDuration: '1m',
            gracefulStop: '10s',
            tags: {test_type: 'busca_de_crocodilos_id'}
        }
    }
};

export function listar(){
    http.get(__ENV.URL+'/crocodiles');
}

export function buscar(){
    //Qual VU atual está realizando a execução
    if(__VU % 2 === 0) {
        http.get(__ENV.URL+'/crocodiles/2')
    } else{
        http.get(__ENV.URL+'/crocodiles/1')
    }


    


}