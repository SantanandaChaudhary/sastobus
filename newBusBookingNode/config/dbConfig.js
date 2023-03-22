module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "bus_booking",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// for production

// module.exports = {
//   HOST: "localhost",
//   USER: "prismeffectnepal_sastobus",
//   PASSWORD: "Ultimate@22",
//   DB: "prismeffectnepal_sastobus",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };
