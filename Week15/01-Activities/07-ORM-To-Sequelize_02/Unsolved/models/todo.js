
module.exports = function(sequelizeConnection, DataTypes) {
    const Todo = sequelizeConnection.define("todo", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    
    return Todo;
};
