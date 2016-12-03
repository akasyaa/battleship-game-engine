import { expect } from 'chai';
import checkForShip from '../game_logic/ship_methods'

describe('checkForShip', () => {

    it('should correctly report no ship at a given players coordinate', () => {
        var player = {
            ships: [
                {
                    location: [[0, 0]]
                }
            ]
        }

        expect(checkForShip(player, [9, 9])).to.be.false;
    });
});
