//Modulos embutidos - que fazem parte da própria lib do k6
//Módulos remotos - que não fazem parte da lib do k6 que adiciona fazendo importação remota pelo http
//Modulos do sistema local de arquivos - utilizar algum arquivo local do sistema como módulo para ferramenta
//https://jslib.k6.io/

//default
import http from 'k6/http';
//remoto
import { AWSConfig, S3Client } from 'https://jslib.k6.io/aws/0.4.0/s3.js';
//local
import runTest from './03.Realizando-checks'