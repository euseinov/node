module.exports = {
    app: {
      port: +process.env.PORT || 3000,
      token: "secret"
    },
    random: {
        min: 0, 
        max: 100
    }
}