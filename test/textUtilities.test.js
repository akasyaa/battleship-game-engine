//var titleCase = require('../textUtilities.js');
import titleCase from '../textUtilities.js';
import { expect } from 'chai';

//var expect = require('chai').expect;

expect(titleCase('lord of the rings')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('titanic')).to.equal('Titanic');
expect(titleCase('lord of the rings')).to.equal('Lord of the Rings');
