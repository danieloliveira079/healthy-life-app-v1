# Healthy Life Application

O aplicativo Healthy Life é composto por dois sistemas:

- Front-End: Aplicação NodeJS usando React+Flux
- Back-End: REST API escrita usando o framework Rails. O código fonte da API pode ser encontrada em [https://github.com/danieloliveira079/healthy-life-api](https://github.com/danieloliveira079/healthy-life-api)
- Banco de Dados: Postgresql

As duas soluções rodam isoladamente e podem ser hospedadas em servidores diferentes. Para facilitar o processo de execução do sistema completo, é possível iniciar todos os serviços (Front, Back e Bando de Dados) usando containers [Docker](https://www.docker.com/).

Se você não está familizarizado com a tecnologia de containers, acesse o site do [Docker](https://www.docker.com/) para conhecer sobre seus vários produtos e soluções.

### Requisitos

#### Linux

Para instalar o docker em distribuições Linux execute o seguinte comando em uma janela de terminal:

`$ curl -fsS https://raw.githubusercontent.com/danieloliveira079/docker-install/master/install-offical | bash`

Esse comando fará o download dos arquivos necessários para instalação do docker e suas dependências. Ao final do processo sua máquina estará pronta para baixar imagens e rodar containers.


#### OSX e Windows

Para instalar o Docker em máquinas Windows ou OSX acesse o endereço [https://www.docker.com/products/docker-toolbox](https://www.docker.com/products/docker-toolbox). Nele você vai encontrar todos os passos para instalar o Docker Toolbox. 


## Instalação

Faça o clone do repositório do projeto executando o seguinte comando em uma janela de terminal:

`$ git clone https://github.com/danieloliveira079/healthy-life-app-v1.git`

Entre na pasta raiz do projeto

`$ cd health-life-app-v1`

## Rodar a solução usando [Docker](https://www.docker.com)

A tecnologia de containers nos permite iniciar os 3 serviços do aplicativo de forma muito rápida e simples. O comando a seguir irá fazer o download das imagens dos containers do front-end, back-end e bango de dados. E ao final irá inicializar cada um deles. Ao término do carregamento ja será possível abrir o navegador e visualizar a página de login do aplicativo.

Em uma janela do terminal execute o seguinte comando estando na raíz do projeto:

`sudo docker-compose up`

Esse processo levará um tempo para ser concluído pois serão baixadas todas as images do repositório [Docker Hub](https://hub.docker.com/). Além disso durante a inicialização dos containers são realizados alguns procedimentos como: build, criação do banco e inserção inicial de dados base.

Após finalizados todos os processos vc deve ver na janela do terminal uma mensagem dizendo:

`web_1 | Listening on port 8080`

Isso signinifa que já é possível abrir o navegador e apontar para o endereço http://0.0.0.0:8080.

Se tudo correu bem será carregada a página de login.

Para validar que o back-end está funcionando corretamente será preciso realizar login no aplicativo informando o email e senha cadastrados.

## Considerações Importantes

O aplicativo front-end faz as requisições para o endpoint da API configurada pela variável de ambiente API_SERVICE_URL. Se você estiver rodando a solução em sistemas operacionais OSX ou Windows será preciso alterar esse valor para o endereço IP da sua docker-machine. Para saber o endereço da sua docker-machine execute o comando `$ docker-machine ip [NOMEDAMAQUINA]`. Por padrão o nome da máquina criada durante a instalação do toolbox é `default`. Se você não mudou o nome da máquina o comando completo ficaria `$ docker-machine ip default`. 

O container do banco de dados Postgres salva suas informações no diretório da sua máquina local em `/var/data/postgres`. Isso pode ser alterado modificando o caminho especificado no arquivo docker-compose.yml. A chave `volumes`do serviço db é responsável por informar ao banco onde os dados devem ser salvos.


