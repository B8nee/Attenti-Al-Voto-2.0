import Studente from "../gameComponents/Studente/Studente";
import Voti from "../gameComponents/voti/Voti";
import Hud from "./Hud";

export default class GamePlay extends Phaser.Scene {
  private _scuola: Phaser.GameObjects.Image;
  private _level: number = 1;
  private _player: Studente;
  private _votiGroup: Phaser.GameObjects.Group;
  private _votiGroup2: Phaser.GameObjects.Group;
  private _votiCounter: number = 0;
  private _voti: Phaser.GameObjects.Image;
  private _voti2: Phaser.GameObjects.Image;

  constructor() {
    super({ key: "GamePlay" });
  }

  async preload() {
    this._scuola = this.add.image(0, 0, "scuola3").setOrigin(0);
    this.load.image("2", "assets/voti/2.png");
    this.load.image("10", "assets/voti/10.png");
  }

  async create() {
    this._level = 1;
    this._votiGroup = this.add.group({ runChildUpdate: true });
    this._votiGroup2 = this.add.group({ runChildUpdate: true });

    this._player = new Studente({
      scene: this,
      x: 512,
      y: 300,
      key: "studente",
    });

    this.physics.add.collider(
      this._player,
      this._voti,
      this.votiNegativi,
      undefined,
      this
    );

    this.physics.add.collider(
      this._player,
      this._voti2,
      this.votiPositivi,
      undefined,
      this
    );
  }

  async votiNegativi() {
    this.scene.stop();
    this.scene.start("GameOver");
  }
  
  async votiPositivi() {
    this.events.emit("update-score", 10);
  }

  votiController = async () => {
    const duration = Phaser.Math.Between(7000, 9000); // 19 x 11 = 210

    this._voti = this.add.image(Phaser.Math.Between(0, 1280), 0, "2");

    this._voti2 = this.add.image(Phaser.Math.Between(0, 1280), -100, "10");

    this.tweens.add({
      targets: this._voti,
      y: 720,
      ease: "Linear",
      duration,
    });

    this.tweens.add({
      targets: this._voti2,
      delay: 1000,
      y: 720,
      ease: "Linear",
      duration,
    });

    this._votiCounter += 1;

    setTimeout(() => {
      this._votiCounter -= 1;
    }, 3000);
  };

  async update(time: number, delta: number) {
    function delay(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    this._player.update();
    if (this._votiCounter < 1) {
      this.votiController();
    }
  }
}
