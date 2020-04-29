const Usuario = require('./Usuario');
const Post = require('./Post');

const Comentario = (sequelize, DataTypes) => {
    return sequelize.define(
        'Comentario',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            texto: {
                type: DataTypes.STRING,
                allowNull: false
            },
            usuarios_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: Usuario,
                    key: 'id'
                }
            },
            posts_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: Post,
                    key: 'id'
                }
            }
        },
        {
            tableName: 'comentarios',
            timestamps: false
        }
    )
}

module.exports = Comentario;