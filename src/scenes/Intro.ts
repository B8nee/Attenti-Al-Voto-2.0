export default class Intro extends Phaser.Scene {
  private _play: Phaser.GameObjects.BitmapText;
  private _Text: Phaser.GameObjects.Text;
  private _comandi: Phaser.GameObjects.BitmapText;
  private _rotating: boolean = false;
  private _back: Phaser.GameObjects.Image;
  constructor() {
    super({
      key: "Intro",
    });
  }

  preload() {
    this._back = this.add.image(0, 0, "sfondoIntro").setOrigin(0);
  }

  create() {
    
    this._play = this.add
      .bitmapText(640, 550, "arcade", "GIOCA")
      .setAlpha(1)
      .setOrigin(0.5)
      .setInteractive()
      .setDepth(100)
      .setTint(0x8A2BE2)

      .on("pointerup", () => {
        this._play.removeInteractive();
        this.startGame();
      })
      .on("pointerover", () => {
        this._play.setTint(0x8A2BE2);
      })
      .on("pointerout", () => {
        this._play.setTint(0xff8200);
      });
      this._comandi = this.add
      .bitmapText(1020, 540, "arcade", "Comandi")
      .setAlpha(1)
      .setInteractive()
      .setDepth(100)
      .setTint(0x8A2BE2)

      .on("pointerup", () => {
        this._comandi.removeInteractive();
        this.startComandi();
      })
      .on("pointerover", () => {
        this._comandi.setTint(0x8A2BE2);
      })
      .on("pointerout", () => {
        this._comandi.setTint(0xff8200);
      });
      
  }
  startGame() {
  
      this.scene.stop("Intro");
      this.scene.start("GamePlay");
      this.scene.start("Hud");
      this.scene.bringToTop("Hud");
      if (this.sys.game.device.input.touch) {}
  };

  startComandi() {
  
    this.scene.stop("Intro");
    this.scene.start("Comandi");
    if (this.sys.game.device.input.touch) {
      
      
    }
};

  update(time: number, delta: number) {

  }

}
