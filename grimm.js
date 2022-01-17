class Grimm {
  constructor(game) {
    this.game = game;
    this.animator = new Animator(
      ASSET_MANAGER.getAsset('./grimm.png'),
      0,
      30,
      250,
      450,
      22,
      0.08
    );
  }
  update() {}

  draw(ctx) {
    //ctx.drawImage(ASSET_MANAGER.getAsset('./grimm.png'), 0, 0);
    this.animator.drawFrame(this.game.clockTick, ctx, 10, 10);
  }
}
