export default (app, magnet) => {
  app.get('/', (req, res) => {
    res.json({environment: magnet.getConfig().environment});
  });
};
