## Projeto Fake Instagram 

#### Roadmap:

###### A - 1º Piloto - Setup do projeto:
    ✔ Fazer fork do projeto
    ✔ Clonar projeto para local
    ✔ Rodar script de criação do banco de dados
    ✔ Instalar
        ✔ sequelize
        ✔ sequelize-cli
        ✔ mysql2
        ✔ dotenv
    ✔ Configurar conexão com o banco utilizando variáveis do ambiente (https://github.com/motdotla/dotenv)
    ✔ Testar conexão com o banco (node testeDb.js)
    ✔ Atualizar repositório remoto
    ✔ Adicionar outros membros como colaboradores

###### B - Comum - Setup do BD:
    ✔ Clonar repositório
    ✔ Ajustar conexão a banco de dados alterando o ".env"
    ✔ Testar conexão com o banco (node testeDb.js)

###### C - 2º Piloto - Criação de Model Usuario:
    ✔ Configurar .sequelizerc ["models": path.resolve("models")]
    ✔ Rodar o sequelize para criação/configuração de pasta de models [npx sequelize init:models]
    ✔ Alterar a linha 8 do models/index.js para que o require carregue as configurações corretamente.
    ✔ Criar model Usuario [Usuario.js]
    ✔ Testar se model Usuario (testes/testeModelUsuario.js)

###### D - 3º Piloto - Criação do Model Post:
    ✔ Criar o model Post

###### E - 4º Piloto - Criação do Model Comentario:
    ✔ Criar o model Comentario
    ✘ Criar um método Post.getComentarios() no model Post que retorna um array de comentarios do Post @cancelled

###### F - 5º Piloto - Login:
    ✔ Instalar bcrypt
    ✔ Instalar express-session
    ✔ Fazer o Login:
        ✔ Criar rota post para '/login' que direciona para AuthController.login
        ✔ Criar método AuthController.login
            Caso o usuário com o email e senha digitados no form exista e tenha a senha
            correta, esse método deve criar uma session chamada usuario e armazenar
            esse usuario nesse session. Feito isso, direcionar para a rota "/home"
            Caso o usuário/senha não esteja correto, deve direcionar para "/" passando
            status de erro na url
        ✔ Criar um Middlerware em middlewares/VerificaUsuarioLogado.js:
            Esse middleware verifica se o usuário está logado. Caso não esteja, direciona o
            visitante para '/'. Caso ele esteja, next()!
        ✔ Proteger a rota "/home" com VerificaUsuarioLogado.js

###### G - Relacionamento entre models:
    ✔ Definir associação de models Post <==> Comentario

###### H - Exibir feed:
    ✔ Alterar rota get '/home' para direcionar controller HomeController.show
    ✔ Criar o HomeController com método show.
        O método HomeController.show deve renderizar a view index.ejs
        passando para ela o Usuario logado.
    ✔ Alterar a view index.ejs para mostrar todos os posts e todos os comentários de cada post

###### I - Curtir Post:
    ☐ Criar rota post para '/curtir' direcionando para HomeController.curtir
        A rota deve ser protegida pelo middleware VerificaUsuarioLogado
    ☐ HomeController.curtir deve receber o id do Post a ser curtido e incrementar o número de curtidas dele
    ☐ Fazer o botão curtir submeter um form via post para '/curtir' contendo o id do Post curtido

###### J - Adicionar Comentário:
    ☐ Criar rota post para '/comentario' que direciona para HomeController.comentar
        A rota deve ser protegida pelo middleware VerificaUsuarioLogado
    ☐ Criar HomeController.comentar
        HomeController.comentar deve criar um novo comentário com o texto recebido associado ao post
        e ao usuário que realizou o comentário. Ao final da operação, redirecionar para '/home'

###### K - Registrar novo usuário:
    ☐ Criar rota post para '/registro' direcionando para o controller UsuarioController.store
    ☐ Criar controller UsuarioController e nela o método store.
        Esse método deve receber as informações do formulário e tentar criar um novo usuário com
        elas. Caso obtenha sucesso, deve setar a session de usuário para o visitante e direcioná-lo
        para a home

###### L - Criar nova Publicação (Post):
    ☐ Alterar a view index.ejs para que ela tenha um formulário com os campos de text e fila
    ☐ Configurar o multer para salvar arquivos de upload em public/img/publicacoes
    ☐ Criar uma rota post para '/post' que é direcionada para PostsController.store
        Esse método deve salvar os dados do post no BD e direcionar o usuário de volta para '/home'