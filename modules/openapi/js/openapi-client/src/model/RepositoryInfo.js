/**
 * GeoGig Web API
 * GeoGig Web API.  You can find out more about GeoGig at [http://geogig.org](http://geogig.org)
 *
 * OpenAPI spec version: 0.1.0
 * Contact: groldan@boundlessgeo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/IdentifiedObject', 'model/OriginInfo', 'model/TaskResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IdentifiedObject'), require('./OriginInfo'), require('./TaskResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Geogig) {
      root.Geogig = {};
    }
    root.Geogig.RepositoryInfo = factory(root.Geogig.ApiClient, root.Geogig.IdentifiedObject, root.Geogig.OriginInfo, root.Geogig.TaskResult);
  }
}(this, function(ApiClient, IdentifiedObject, OriginInfo, TaskResult) {
  'use strict';




  /**
   * The RepositoryInfo model module.
   * @module model/RepositoryInfo
   * @version 0.1-SNAPSHOT
   */

  /**
   * Constructs a new <code>RepositoryInfo</code>.
   * @alias module:model/RepositoryInfo
   * @class
   * @extends module:model/TaskResult
   * @implements module:model/IdentifiedObject
   */
  var exports = function() {
    var _this = this;
    TaskResult.call(_this);
    IdentifiedObject.call(_this);



  };

  /**
   * Constructs a <code>RepositoryInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RepositoryInfo} obj Optional instance to populate.
   * @return {module:model/RepositoryInfo} The populated <code>RepositoryInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      TaskResult.constructFromObject(data, obj);
      IdentifiedObject.constructFromObject(data, obj);
      if (data.hasOwnProperty('store')) {
        obj['store'] = IdentifiedObject.constructFromObject(data['store']);
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = IdentifiedObject.constructFromObject(data['owner']);
      }
      if (data.hasOwnProperty('forked_from')) {
        obj['forked_from'] = OriginInfo.constructFromObject(data['forked_from']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(TaskResult.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:model/IdentifiedObject} store
   */
  exports.prototype['store'] = undefined;
  /**
   * @member {module:model/IdentifiedObject} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * @member {module:model/OriginInfo} forked_from
   */
  exports.prototype['forked_from'] = undefined;

  // Implement IdentifiedObject interface:
  /**
   * A unique and immutable identifier for the object, generated by the system, and unique across the whole system
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * A user given name for the object, unique across its domain of usage, and modifiable as long as it remains unique. I.e. Store and User names are globally unique, Repository names are unique in the scope of their owner.
   * @member {String} identity
   */
exports.prototype['identity'] = undefined;



  return exports;
}));

