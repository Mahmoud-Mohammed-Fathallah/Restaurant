module.exports = (sequelize: any, DataTypes: any) => {
  const Admin = sequelize.define("Admin", {
    Admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    phone: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    HPassword: {
      type: DataTypes.STRING,
    }
  });
  return Admin;
}