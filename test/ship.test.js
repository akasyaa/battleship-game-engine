import { expect } from 'chai';
import { checkForShip, damageShip, fire } from '../game_logic/ship_methods'


describe('checkForShip', () => {
    var player;

    before(() => {
        player = {
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
    });

    it('should correctly report no ship at a given players coordinate', () => {
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should correctly report ship at a given players coordinate', () => {
        expect(checkForShip(player, [0, 0])).not.to.be.false;
    });

    it('should correctly check for ships located at more than one coordinate', () => {
        expect(checkForShip(player, [0, 1])).not.to.be.false;
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should correctly check for multiple ships', () => {
        expect(checkForShip(player, [9, 9])).to.be.false;
        expect(checkForShip(player, [0, 0])).not.to.be.false;
        expect(checkForShip(player, [0, 1])).not.to.be.false;
        expect(checkForShip(player, [1, 0])).not.to.be.false;
        expect(checkForShip(player, [1, 1])).not.to.be.false;
        expect(checkForShip(player, [9, 3])).not.to.be.false;
    });
});

describe('damageShip', () => {
    it('should register damage on a given ship at a given location', () => {
        var ship = {
            locations: [[0, 0]],
            damage: []
        };

        damageShip(ship, [0, 0]);

        expect(ship.damage).to.not.be.empty;
        expect(ship.damage[0]).to.deep.equal([0, 0]);
    });
});

describe('fire', () => {
    var player;

    beforeEach(() => {
        player = {
            ships: [
                {
                    locations: [[0, 0]],
                    damage: []
                }
            ]
        };
    });

    it('should record damage on the given players ship at a given coordinate', () => {
        fire(player, [0, 0]);

        expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
    });

    it('should not record damage if there is no ship at the target coordinate', () => {
        fire(player, [9, 9]);

        expect(player.ships[0].damage).to.be.empty;
    });
});
