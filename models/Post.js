const Usuario = require('./Usuario');

const Post = (sequelize, DataTypes) => {
    return sequelize.define(
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
                type: DataTypes.INTEGER,
                references: {
                    model: Usuario,
                    key: 'id'
                }
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
}

module.exports = Post;