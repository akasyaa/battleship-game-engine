import { expect } from 'chai';
import checkForShip from '../game_logic/ship_methods'

describe('checkForShip', () => {

    it('should correctly report no ship at a given players coordinate', () => {
        var player = {
            ships: [
                {
                    locations: [[0, 0]]
                }
            ]
        }

        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should correctly report ship at a given players coordinate', () => {
        var player = {
            ships: [
                {
                    locations: [[9, 9]]
                }
            ]
        }

        expect(checkForShip(player, [9, 9])).to.be.true;
    });

    it('should correctly check for ships located at more than one coordinate', () => {
        var player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                }
            ]
        }

        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should correctly check for multiple ships', () => {
        var player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                },
                {
                    locations: [[1, 0], [1, 1]]
                },
                {
                    locations: [[2, 0], [2, 1], [9, 3]]
                }
            ]
        }

        expect(checkForShip(player, [9, 9])).to.be.false;
        expect(checkForShip(player, [0, 0])).to.be.true;
        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [1, 0])).to.be.true;
        expect(checkForShip(player, [1, 1])).to.be.true;
        expect(checkForShip(player, [9, 3])).to.be.true;
    });
});
