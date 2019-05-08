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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Geogig);
  }
}(this, function(expect, Geogig) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Geogig.AsyncTaskInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AsyncTaskInfo', function() {
    it('should create an instance of AsyncTaskInfo', function() {
      // uncomment below and update the code to test AsyncTaskInfo
      //var instane = new Geogig.AsyncTaskInfo();
      //expect(instance).to.be.a(Geogig.AsyncTaskInfo);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Geogig.AsyncTaskInfo();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new Geogig.AsyncTaskInfo();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Geogig.AsyncTaskInfo();
      //expect(instance).to.be();
    });

    it('should have the property progress (base name: "progress")', function() {
      // uncomment below and update the code to test the property progress
      //var instane = new Geogig.AsyncTaskInfo();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdated (base name: "last_updated")', function() {
      // uncomment below and update the code to test the property lastUpdated
      //var instane = new Geogig.AsyncTaskInfo();
      //expect(instance).to.be();
    });

    it('should have the property scheduledAt (base name: "scheduled_at")', function() {
      // uncomment below and update the code to test the property scheduledAt
      //var instane = new Geogig.AsyncTaskInfo();
      //expect(instance).to.be();
    });

    it('should have the property startedAt (base name: "started_at")', function() {
      // uncomment below and update the code to test the property startedAt
      //var instane = new Geogig.AsyncTaskInfo();
      //expect(instance).to.be();
    });

    it('should have the property finishedAt (base name: "finished_at")', function() {
      // uncomment below and update the code to test the property finishedAt
      //var instane = new Geogig.AsyncTaskInfo();
      //expect(instance).to.be();
    });

    it('should have the property repository (base name: "repository")', function() {
      // uncomment below and update the code to test the property repository
      //var instane = new Geogig.AsyncTaskInfo();
      //expect(instance).to.be();
    });

    it('should have the property startedBy (base name: "started_by")', function() {
      // uncomment below and update the code to test the property startedBy
      //var instane = new Geogig.AsyncTaskInfo();
      //expect(instance).to.be();
    });

    it('should have the property abortedBy (base name: "aborted_by")', function() {
      // uncomment below and update the code to test the property abortedBy
      //var instane = new Geogig.AsyncTaskInfo();
      //expect(instance).to.be();
    });

    it('should have the property transaction (base name: "transaction")', function() {
      // uncomment below and update the code to test the property transaction
      //var instane = new Geogig.AsyncTaskInfo();
      //expect(instance).to.be();
    });

    it('should have the property result (base name: "result")', function() {
      // uncomment below and update the code to test the property result
      //var instane = new Geogig.AsyncTaskInfo();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instane = new Geogig.AsyncTaskInfo();
      //expect(instance).to.be();
    });

  });

}));