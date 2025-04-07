export const options = {
  username: process.env.DB.USERNAME,
  password: process.env.DB.PASSWORD,
  database: process.env.DB.NAME,
  host: process.env.DB.HOST,
  port: Number(process.env.DB_PORT),
  dialect: "mysql",
  logging: process.env.NODE_ENV === "development" ? console.log : false,
  migrationStorageTableName: "migration",
};

if (process.env.NODE_ENV === "production") {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: true,
    },
  };
}

export default {
  development: options,
  test: options,
  production: options,
};
