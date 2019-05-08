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
    define(['ApiClient', 'model/ObjectHash', 'model/ObjectType', 'model/RevisionObject', 'model/SimplePropertyDescriptor'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ObjectHash'), require('./ObjectType'), require('./RevisionObject'), require('./SimplePropertyDescriptor'));
  } else {
    // Browser globals (root is window)
    if (!root.Geogig) {
      root.Geogig = {};
    }
    root.Geogig.RevisionFeatureType = factory(root.Geogig.ApiClient, root.Geogig.ObjectHash, root.Geogig.ObjectType, root.Geogig.RevisionObject, root.Geogig.SimplePropertyDescriptor);
  }
}(this, function(ApiClient, ObjectHash, ObjectType, RevisionObject, SimplePropertyDescriptor) {
  'use strict';




  /**
   * The RevisionFeatureType model module.
   * @module model/RevisionFeatureType
   * @version 0.1-SNAPSHOT
   */

  /**
   * Constructs a new <code>RevisionFeatureType</code>.
   * @alias module:model/RevisionFeatureType
   * @class
   * @extends module:model/RevisionObject
   * @param id {module:model/ObjectHash} 
   * @param objectType {module:model/ObjectType} 
   * @param name {String} 
   * @param properties {Array.<module:model/SimplePropertyDescriptor>} 
   */
  var exports = function(id, objectType, name, properties) {
    var _this = this;
    RevisionObject.call(_this, id, objectType);
    _this['name'] = name;
    _this['properties'] = properties;

  };

  /**
   * Constructs a <code>RevisionFeatureType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RevisionFeatureType} obj Optional instance to populate.
   * @return {module:model/RevisionFeatureType} The populated <code>RevisionFeatureType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      RevisionObject.constructFromObject(data, obj);
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], [SimplePropertyDescriptor]);
      }
      if (data.hasOwnProperty('defaultGeometry')) {
        obj['defaultGeometry'] = ApiClient.convertToType(data['defaultGeometry'], 'String');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(RevisionObject.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/SimplePropertyDescriptor>} properties
   */
  exports.prototype['properties'] = undefined;
  /**
   * Name of the default geometric attribute
   * @member {String} defaultGeometry
   */
  exports.prototype['defaultGeometry'] = undefined;



  return exports;
}));

