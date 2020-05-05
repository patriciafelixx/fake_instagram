const Post = (sequelize, DataTypes) => {
    let post = sequelize.define(
        'Post',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            texto: {
                type: DataTypes.STRING(100)
            },
            img: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            usuarios_id: {
                type: DataTypes.INTEGER
            },
            n_likes: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            }
        },
        {
            tableName: 'posts',
            timestamps: false
        }
    )

    post.associate = (models) => {
        post.hasMany(models.Comentario, { foreignKey: 'posts_id', as: 'comentarios'});
        post.belongsTo(models.Usuario, { foreignKey: 'usuarios_id', as: 'usuario'});
    }

    return post;
}

module.exports = Post;