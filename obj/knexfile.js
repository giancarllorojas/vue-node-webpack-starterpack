module.exports = {
  development: {
    client: 'mysql2',
    useNullAsDefault: true,
    connection: {
      host : '127.0.0.1',
      user : 'defense',
      password : 'slickmac',
      database : 'coredacao'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'example'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
