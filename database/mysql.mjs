import { Sequelize } from "sequelize";

//const sequelize = new Sequelize("mysql://root:root@localhost:3306/dewii2024");
const sequelize = new Sequelize("postgresql://user_db:90PvES0GexVbg6DltvbZ0QAiJAEurkoG@dpg-cquesmtsvqrc73bnhvbg-a/veiculos_o28e");

sequelize.sync();


export default sequelize;
