//Scenarios
//Ganhos
//1. Organização do teste - Declara vários cenários no mesmo script e executa cada um diferente
//2. Simulações mais realistas - Cada cenário pode usar uma vu específico e um EXECUTOR específico
//3. Cargas de trabalho paralelas ou sequenciais
//4. Análise granular dos resultados - Diferentes variáveis de ambiente pode servir pra cada cenário

//Options disponíveis:
//executor - item obrigatório
//startTime - ponto que o cenário deve iniciar no tempo de vida do teste 
//gracefulstop - é o período no final do teste que as interações permitem que terminem
//exec - nome da função js a ser importada e ser executada
//env - define enviroments específicas para esses cenários
//tags - podemos definir tags para cada cenário

//Agrupados em 3 grupos
//Por número de iterações:
// - Possui executores shared-iterations e per-vu-iterations.
//   - shared-iterations - compartilha iterações entre vus
//   - per-vu-iterations - cada vu execute as iterações configuradas
//Por número de VUs:
// - Possui executores constant-vus e ramping-vus.
//   - shared-iterations - envia um número constante para execução
//   - per-vu-iterations - aumenta o número de vus de acordo com o seu status configurados
//Por taxa de iteração:
// - Possui executores constant-arrival-rate e ramping-arrival-rate.
//   - constant-arrival-rate - inicia iterações a uma taxa constante
//   - ramping-arrival-rate - aumenta a taxa de iterações de acordo com os estágios configurados
