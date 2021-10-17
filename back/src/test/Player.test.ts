import { Player } from '../model/Player';

describe('Tests for Player Model', () => {
  test('Player should be instantiated', () => {
    const playerX = new Player('ace', null);
    expect(playerX).toBeInstanceOf(Player);
  });

  test('Player.getName() return name', () => {
    const playerX = new Player('ace', null);
    expect(playerX.name).toEqual('ace');
  });

  test('Player.setName("awesome Jack") return "awesome Jack"', () => {
    const playerX = new Player('ace', null);
    playerX.setName('awesome Jack');
    expect(playerX.setName('awesome Jack')).toEqual('awesome Jack');
  });
});
