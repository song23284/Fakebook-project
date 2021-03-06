module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define('comment', {
      message: {
        type: DataTypes.STRING(1000)
      }
    })
  
    comment.associate = (models) => {
      comment.belongsTo(models.user, { onDelete: 'CASCADE', foreignKey: 'user_id' })
    }
  
    return comment
  }