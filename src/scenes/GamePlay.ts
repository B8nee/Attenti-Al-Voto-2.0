import Studente from "../gameComponents/Studente/Studente";
import Voti from "../gameComponents/voti/Voti";
import Prof from "../gameComponents/voti/Prof";

export default class GamePlay extends Phaser.Scene {
  private _scuola: Phaser.GameObjects.Image;
  private _level: number = 1;
  private _player: Studente;
  private _votiGroup: Phaser.GameObjects.Group;
  private _votiGroup2: Phaser.GameObjects.Group;
  private _votiCounter: number = 0;
  private _voti: Phaser.GameObjects.Image;
  private _voti2: Phaser.GameObjects.Image;
  private _profGroup: Phaser.GameObjects.Group;
  private _prof: any;

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
    this._profGroup = this.add.group({ runChildUpdate: true });

    this._player = new Studente({
      scene: this,
      x: 512,
      y: 300,
      key: "studente",
    });

    this._player = this.physics.add.existing(this._player);

    this._prof = new Prof({
      scene: this,
      x: this.game.canvas.width / 2,
      y: 0,
      key: "prof",
    }).setAlpha(0);

    this._prof = this.physics.add.existing(this._prof);
    this._prof.body.setAllowGravity(false);

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
    // collisione da verificare
    this.physics.add.collider(
      this._player,
      this._prof,
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

  async addProf(prof: Prof) {
    this._profGroup.add(prof);
  }

  async update(time: number, delta: number) {
    this._player.update();
    this._prof.update();
  }
}
