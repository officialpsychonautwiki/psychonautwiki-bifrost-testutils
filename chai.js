'use strict';

const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const chaiSubset = require('chai-subset');
const chaiShallowSeepEqual = require('chai-shallow-deep-equal');

chai.should();

chai.use(sinonChai);
chai.use(chaiSubset);
chai.use(chaiShallowSeepEqual);

// Don't change the order of this:
chai.use(chaiAsPromised);

chai.config.includeStack = true;

module.exports = chai;
