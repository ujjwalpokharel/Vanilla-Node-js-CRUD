const { productData } = require("../data/productData");

const productDataFindAll = async () => {
  const { Pool } = require("pg");
  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "curd",
    password: "ujjwal",
    port: 5432,
  });
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM products");
    const users = result.rows;
    console.log("users", users);
    return new Promise((resolve, reject) => {
      resolve(users);
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { productDataFindAll };
