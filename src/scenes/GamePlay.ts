import Studente from "../gameComponents/Studente/Studente";
import Voti from "../gameComponents/voti/Voti";
import Hud from "./Hud";

export default class GamePlay extends Phaser.Scene {
  private _scuola: Phaser.GameObjects.Image;
  private _level: number = 1;
  private _player: Studente;
  private _votiGroup: Phaser.GameObjects.Group;
  private _votiCounter: number = 0;

  constructor() {
    super({ key: "GamePlay" });
  }

  async preload() {
    this._scuola = this.add.image(0, 0, "scuola3").setOrigin(0);
  }

  async create() {
    this._level = 1;
    this._votiGroup = this.add.group({ runChildUpdate: true });

    this._player = new Studente({
      scene: this,
      x: 512,
      y: 300,
      key: "studente",
    });
  }

  async addVoti(voti: Voti) {
    this._votiGroup.add(voti);
    this.events.emit("update-score", [1]);
  }

  async removeVoti(voti: Voti) {
    this._votiGroup.remove(voti, true, true);
  }

  votiController = async () => {
    const duration = Phaser.Math.Between(7000, 9000); // 19 x 11 = 210
    const rand_x = Phaser.Math.Between(0, 1280);

    const voti = new Voti({
      scene: this,
      x: rand_x,
      y: 0,
      key: "1",
    });

    this.tweens.add({
      targets: voti,
      y: -700,
      ease: "Linear",
      duration,
    });

    this._votiCounter += 1;

    setTimeout(() => {
      this._votiCounter -= 1;
    }, Phaser.Math.Between(350, 1350));
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
