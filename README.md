### Projeto Fake Instagram

**A - 1º Piloto - Setup do projeto:**
- [x] Fazer fork do projeto
- [x] Clonar projeto para local
- [x] Rodar script de criação do banco de dados
- [x] Instalar
        - sequelize
        - sequelize-cli
        - mysql2
        - dotenv
- [x] Configurar conexão com o banco utilizando variáveis do ambiente (https://github.com/motdotla/dotenv)
- [x] Testar conexão com o banco (node testeDb.js)
- [x] Atualizar repositório remoto
- [x] Adicionar outros membros como colaboradores

**B - Comum - Setup do BD:**
- [x] Clonar repositório
- [x] Ajustar conexão a banco de dados alterando o ".env"
- [x] Testar conexão com o banco (node testeDb.js)

**C - 2º Piloto - Criação de Model Usuario:**
- [ ] Configurar .sequelizerc ["models": path.resolve("models")]
- [ ] Rodar o sequelize para criação/configuração de pasta de models [npx sequelize init:models]
- [ ] Alterar a linha 8 do models/index.js para que o require carregue as configurações corretamente.
- [ ] Criar model Usuario [Usuario.js]
- [ ] Testar se model Usuario (testes/testeModelUsuario.js)

**D - 3º Piloto - Criação do Model Post:**
- [ ] Criar o model Post

**E - 4º Piloto - Criação do Model Comentario:**
- [ ] Criar o model Comentario
- [ ] Criar um método Post.getComentarios() no model Post que retorna um array de comentarios do Post

**F - 5º Piloto - Login:**
- [ ] Instalar bcrypt
- [ ] Instalar express-session
- [ ] Fazer o Login:
    - [ ] Criar rota post para '/login' que direciona para AuthController.login
    - [ ] Criar método AuthController.login
            Caso o usuário com o email e senha digitados no form exista e tenha a senha
            correta, esse método deve criar uma session chamada usuario e armazenar
            esse usuario nesse session. Feito isso, direcionar para a rota "/home"
            Caso o usuário/senha não esteja correto, deve direcionar para "/" passando
            status de erro na url
    - [ ] Criar um Middlerware em middlewares/VerificaUsuarioLogado.js:
            Esse middleware verifica se o usuário está logado. Caso não esteja, direciona o
            visitante para '/'. Caso ele esteja, next()!
    - [ ] Proteger a rota "/home" com VerificaUsuarioLogado.js

**G - 6º Piloto - Exibir feed:**
- [ ] Alterar rota get '/home' para direcionar controller HomeController.show
- [ ] Criar o HomeController com método show.
        O método HomeController.show deve renderizar a view index.ejs
        passando para ela o Usuario logado.
- [ ] Alterar a view index.ejs para mostrar todos os posts e todos os comentários de cada post