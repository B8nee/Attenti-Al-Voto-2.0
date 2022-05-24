
import Studente from "../gameComponents/Studente/Studente";
import Voti from "../gameComponents/voti/Voti";
import Hud from "./Hud";

export default class GamePlay extends Phaser.Scene {


  private _sfx: Phaser.Sound.HTML5AudioSound | Phaser.Sound.WebAudioSound;
  private _scuola: Phaser.GameObjects.TileSprite;
  private _level: number = 1
  private _player :Studente;
  private _platform : any;
  private _base : any;
  private _hud : Hud;
  private _votiGroup: any;


  async addVoti(voti: Voti) {
    this._votiGroup.add(voti);
    this.events.emit("update-score", [1]);
  }
  

  constructor() {
    super({ key: "GamePlay" });
  }
  
  preload() {
    this._scuola = this.add.tileSprite(0,0, this.game.canvas.width ,this.game.canvas.height, "scuola3").setOrigin(0);
  }
  init() {}
  create() {
    this._level = 1;
    this._player = new Studente ({scene: this, x: 512 , y: 300,key: "studente"});

    

 

  }


  async update(time: number, delta: number) {
    this._player.update();

    
  }


}
