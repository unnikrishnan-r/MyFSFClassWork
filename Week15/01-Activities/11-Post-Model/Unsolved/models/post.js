module.exports = function (sequelizeConnection, DataTypes) {
  // Add code here to create a Post model
  // This model needs a title, a body, and a category
  // Don't forget to 'return' the post after defining
  const Post = sequelizeConnection.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 1,
        max: 160
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    }
  });
  return Post;
};