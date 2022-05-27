import GamePlay from "../../scenes/GamePlay";
import Voti from "../Voti/Voti";
import IProf from "./IProf";

export default class Prof extends Phaser.GameObjects.Sprite implements IProf {
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
    this._scene.add.existing(this);
  }

  votiController = async () => {
    const duration = Phaser.Math.Between(7000, 9000); // 19 x 11 = 210
    const rand_x = Phaser.Math.Between(0, 1280);

    const voti = new Voti({
      scene: this._scene,
      x: rand_x,
      y: this.y,
      key: "voti",
    });

    this.scene.tweens.add({
      targets: voti,
      y: 700,
      ease: "Linear",
      duration,
    });

    this.votiCounter += 1;

    setTimeout(() => {
      this.votiCounter -= 1;
    }, 3000);
  };

  async create() {
    this._body.allowGravity = false;
    this._body.setImmovable();
    this._scene.tweens.add({ targets: this, alpha: 1, duration: 200 });
    this._scene.addProf(this);
  }

  async update() {
    if (this.votiCounter < 1) {
      this.votiController();
    }
  }
}
