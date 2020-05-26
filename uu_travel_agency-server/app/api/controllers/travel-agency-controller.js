"use strict";
const TravelAgencyAbl = require("../../abl/travel-agency-abl.js");

class TravelAgencyController {
  init(ucEnv) {
    return TravelAgencyAbl.init(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
}

module.exports = new TravelAgencyController();
