module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        name: {
            type: DataTypes.STRING,
        },
        toppings: {
            type: DataTypes.STRING
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 10,
            allowNull: true,
        },
    });

    Burger.associate = function(models) {
        Burger.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: true
            }
        })
    }
    return Burger
}

