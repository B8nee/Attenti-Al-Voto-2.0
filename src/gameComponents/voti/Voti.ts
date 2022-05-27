import GamePlay from "../../scenes/GamePlay";
import IVoti from "./IVoti";

export default class Voti extends Phaser.GameObjects.Sprite implements IVoti {
  protected _config: genericConfig;
  protected _scene: GamePlay;
  protected _body: Phaser.Physics.Arcade.Body;
  private votiCounter: number = 0;

  constructor(params: genericConfig) {
    super(params.scene, params.x, params.y, params.key);
    this._config = params;
    this._scene = <GamePlay>params.scene;
    this._config.scene.physics.world.enable(this);
    this._body = <Phaser.Physics.Arcade.Body>this._body;
    this._body.setDragX(-1000).setVelocityX(100);
    this.create();
  }

  async create() {
    this._scene.tweens.add({
      targets: this,
      alpha: 1,
      duration: 200,
    });
    this._body.allowGravity = false;
  }

  async update() {}
}
