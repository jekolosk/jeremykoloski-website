module.exports = {
  servers: {
    one: {
      host: '45.55.74.76',
      username: 'root',
      // pem:
      password: 'Jerekol@22'
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'jeremykoloski-website',
    path: '.',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true
    },
    env: {
      ROOT_URL: 'http://jeremykoloski.com',
      MONGO_URL: 'mongodb://jeremy:yellow@jello.modulusmongo.net:27017/e3tYgowa'
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {}
    }
  }
};