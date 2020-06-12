const bcrypt = require('bcrypt');
const { Usuario, Post, Comentario } = require('../models');

const AuthController = {
    
    showLogin: (req,res) => {
        res.render('auth/login');
    },

    showRegistro: (req,res) => {
        res.render('auth/register');
    },

    login: async (req, res) => {
        
        // Lendo as info do body 
        const { email, senha } = req.body;

        // Tentar carregar um usuário
        const user = await Usuario.findOne({ where: { email } });

        // Verifica se existe um usuário com o email passado
        if (!user) {
            res.redirect('/login?error=1');
        }
        
        // Validar a senha passada via post com a guardada no banco
        if (!bcrypt.compareSync(senha, user.senha)) {
            res.redirect('/login?error=1');
        }
        
        // Setar uma session para o usuário
        req.session.usuario = user;

        let posts = await Post.findAll(
            {
                include: [
                    {
                        model: Comentario,
                        as: 'comentarios',
                        include: 'usuario'
                    }, 
                    'usuario'
                ]
            })

        res.render('index', { user, posts });
    }


}

module.exports = AuthController;