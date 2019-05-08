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
    define(['ApiClient', 'model/VersionInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/VersionInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Geogig) {
      root.Geogig = {};
    }
    root.Geogig.ServiceInfoApi = factory(root.Geogig.ApiClient, root.Geogig.VersionInfo);
  }
}(this, function(ApiClient, VersionInfo) {
  'use strict';

  /**
   * ServiceInfo service.
   * @module api/ServiceInfoApi
   * @version 0.1-SNAPSHOT
   */

  /**
   * Constructs a new ServiceInfoApi. 
   * @alias module:api/ServiceInfoApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Obtain service version information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VersionInfo} and HTTP response
     */
    this.getVersionWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth', 'BasicAuth', 'OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/x-jackson-smile'];
      var returnType = VersionInfo;

      return this.apiClient.callApi(
        '/info/version', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Obtain service version information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VersionInfo}
     */
    this.getVersion = function() {
      return this.getVersionWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));