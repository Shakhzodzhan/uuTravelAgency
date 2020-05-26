"use strict";
const TravelAgencyUseCaseError = require("./travel-agency-use-case-error.js");

const Init = {
  UC_CODE: `${TravelAgencyUseCaseError.ERROR_PREFIX}init/`,

  InvalidDtoIn: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchemaDaoCreateSchemaFailed: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.status = 500;
      this.code = `${Init.UC_CODE}schemaDaoCreateSchemaFailed`;
      this.message = "Create schema by Dao createSchema failed.";
    }
  },

  SetProfileFailed: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}sys/setProfileFailed`;
      this.message = "Set profile failed.";
    }
  }
};

module.exports = {
  Init
};
