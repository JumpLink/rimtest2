/**
 * ConfigController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  setup: function (req, res, next) {
    
    async.waterfall([
      function findAll (callback){
        // sails.log.debug("findAll");
        Config.find({}, callback);
      },
      function getNewSetup (list, callback){
        // sails.log.debug("getNewSetup");
        SetupService.config(function (error, newValue) {
          callback(error, list, newValue);
        });
      },
      function updateOrCreate(list, newValue, callback){
        // sails.log.debug("update");
        if(list.length > 0) {
          newValue.id = list[0].id;
          sails.log.debug( Config.update);
          Config.update({id: newValue.id}, newValue, callback);
        } else {
          Config.update(newValue, callback);
        }
      },
    ], function (err, result) {
      // sails.log.debug("done");
      if(err)
        res.json(err);
      else
        res.json(result);
    });
  }

  , create: function (req, res, next) {
    sails.log.debug("create");
    // sails.log.debug(req.query);
    // sails.log.debug(req.param);

    // sails.log.debug(req);
    
    // var data = req.params.all();
    // sails.log.debug(data);
  }

  , update: function (req, res, next) {    
    var data = req.params.all();
    async.waterfall([
      function findAll (callback){
        Config.find({}, callback);
      },
      function overwrite(list, callback){
        data.id = list[0].id;
        sails.log.debug( Config.update);
        Config.update({id: data.id}, data, callback);
      }
    ], function (err, result) {
      if(err)
        res.json(err);
      else
        res.json(result);
    });
  }

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ConfigController)
   */
  , _config: {}

  
};
