exports.mysql_data = {
    host: process.env.LOCAL_HOST_NAME,
    user: 'root',
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    insecureAuth : true
  };