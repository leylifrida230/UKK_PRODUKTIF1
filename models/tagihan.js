'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tagihan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //inisiasi foreignkey id_penggunaan
      this.belongsTo(models.penggunaan, {
        foreignKey: 'id_penggunaan',
        as: 'penggunaan'
      })
    }
  };
  tagihan.init({
    id_tagihan:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    id_penggunaan: DataTypes.INTEGER,
    bulan: DataTypes.STRING,
    tahun: DataTypes.STRING,
    jumlah_meter: DataTypes.FLOAT,
    status: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'tagihan',
    tableName: 'tagihan'
  });
  return tagihan;
};