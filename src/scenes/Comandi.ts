export default class Comandi extends Phaser.Scene {
   private _comandi : Phaser.GameObjects.Image;
   private _scuola : Phaser.GameObjects.Image;
   private _play: Phaser.GameObjects.BitmapText;


    constructor() {
      super({
        key: "Comandi",
      });
    }
    preload() {
        this._scuola = this.add.image(0,0, "sfondoComandi").setOrigin(0);
      }
    create() {
        
      this.add.bitmapText(275, 55,"arcade", "PER MUOVERSI PREMERE").setFontSize(40);
        this._comandi = this.add.image(this.game.canvas.width/2, 300, "comandiMovimento").setTint(0x000000)
        
       this._play = this.add
      .bitmapText(1000, 540, "arcade", "INDIETRO")
      .setAlpha(1)
      .setInteractive()
      .setDepth(100)
      .setTint(0x8A2BE2)

      .on("pointerup", () => {
        this._play.removeInteractive();
        this.startIntro();
      })
      .on("pointerover", () => {
        this._play.setTint(0x4B0082);
      })
      .on("pointerout", () => {
        this._play.setTint(0x8A2BE2);
      });
  }
  startIntro() {
  
    this.scene.stop("Comandi");
    this.scene.start("Intro");
    if (this.sys.game.device.input.touch) {}
   }
    update(time: number, delta: number): void {
        
    }
}