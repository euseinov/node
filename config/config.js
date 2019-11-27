const env = 'dev'; 

const dev = {
    app: {
      port: 3000
    },
    random: {
        min: 0, 
        max: 100
    }
}

const config = {
    dev
};
   
module.exports = config[env];