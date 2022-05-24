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
    this.setScale(0.05);
    this.setAlpha(0).setScale(0.5).setDepth(10);
    this._scene.tweens.add({
      targets: this,
      alpha: 1,
      scale: 0.5,
      duration: 1,
    });
    this._scene.addVoti(this);
    this._scene.add.existing(this);
    this._body.allowGravity = false;
    this._body.setVelocityX(-1700);
  }

  votiController = async () => {
    const duration = Phaser.Math.Between(7000, 9000); // 19 x 11 = 210
    const rand_y = Phaser.Math.Between(this.y - 69, this.y + 69);

    const voti = new Voti({
      scene: this._scene,
      x: this.x,
      y: rand_y,
      key: "1",
    });

    this.scene.tweens.add({
      targets: voti,
      x: -1376,
      ease: "Linear",
      duration,
    });

    this.votiCounter += 1;

    setTimeout(() => {
      this.votiCounter -= 1;
    }, Phaser.Math.Between(350, 1350));
  };

  async update() {}
}