const env={
    host: 'dpg-cr6jn0d6l47c7394r890-a',
    port: 5432,
    username: 'rodrigoumg2024_uir8_user',
    password: 'PApZEMwpHxkRzKxd8ppSYaHb3vl1MoZp',
    database: 'rodrigoumg2024_uir8',
  dialect: 'postgres',
  
  pool:{
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    
  }
  }
  module.exports =env;