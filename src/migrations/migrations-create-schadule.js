'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('schadules', {

            // key: DataTypes.STRING,
            // type: DataTypes.STRING,
            // value_en: DataTypes.STRING,
            // value_vi: DataTypes.STRING
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            currentNumber: {
                type: Sequelize.INTEGER
            },
            maxNumber: {
                type: Sequelize.INTEGER
            },
            date: {
                type: Sequelize.DATE
            },
            timeType: {
                type: Sequelize.STRING
            },
            doctorld: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('schadules');
    }
};