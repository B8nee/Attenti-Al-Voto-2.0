import GamePlay from "../../scenes/GamePlay";
import IStudente from "./IStudente";
import IBomb from "./IStudente";

export default class Studente extends Phaser.GameObjects.Sprite implements IStudente {
  protected _config: genericConfig;
  protected _scene: GamePlay;
  private _body: Phaser.Physics.Arcade.Body;
  private controlloR: Boolean;
  private controlloL: Boolean;
  private controlloI: Boolean;
  private contatoreP: integer = 0;

  private _cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  //private _spacebar: Phaser.Input.Keyboard.Key;
 
  constructor(params: genericConfig) {
    super(params.scene, params.x, params.y, params.key);
    this._config = params;
    this._scene = <GamePlay>params.scene;
    this._config.scene.physics.world.enable(this);
    this._body = <Phaser.Physics.Arcade.Body>this.body;
    this._scene.add.existing(this);

    this._body.setDragX(100).setCollideWorldBounds(true, 0.5).setImmovable(true);

    this._cursors = this._scene.input.keyboard.createCursorKeys();
    //this._spacebar = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    
    this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


    let _animation = {
      key: "idle",
      frames: this.anims.generateFrameNumbers(this._config.key, {
        frames: [0]
      }),
      frameRate: 10,
      yoyo: false,
      repeat: 0
    };

    this.anims.create(_animation);

    _animation = {
      key: "studente",
      frames: this.anims.generateFrameNumbers(this._config.key, {
        frames: [0, 1, 2, 3]
      }),
      frameRate: 10,
      yoyo: false,
      repeat: 0
    };

    this.anims.create(_animation);
    _animation = {
      key: "studenteInverso",
      frames: this.anims.generateFrameNumbers(this._config.key, {
        frames: [0,1,2,3]
      }),
      frameRate: 10,
      yoyo: false,
      repeat: 0
    };
    this.anims.create(_animation);

    _animation = {
      key: "jump",
      frames: this.anims.generateFrameNumbers(this._config.key, {
        frames: [1, 2, 3]
      }),

      frameRate: 10,
      yoyo: true,
      repeat: 0
     
    };
    this.anims.create(_animation);
    
    this.setDepth(11);
  }

  async update() {
    function delay(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    if (this._cursors.left.isDown) {
      this.setFlipX(true)
      this.anims.play("studenteInverso", true);
      this._body.setVelocityX(-300);
      this.controlloL = true;
      this.controlloR = false;
      this.controlloI = false;
    } else if (this._cursors.right.isDown) {
      this.setFlipX(false)
      this.anims.play("studente", true);
      this._body.setVelocityX(300);
      this.controlloL = false;
      this.controlloR = true;
      this.controlloI = false;
    } else {
      this.anims.play("idle", true);
      this.controlloR = false;
      this.controlloL = false;
      this.controlloI = true;

      this._body.setVelocityX(0);
    }

    if (this._cursors.up.isDown && this._body.blocked.down) {
      this._body.setVelocityY(-700);

      delay(500).then(() => {
        this._body.setVelocityY(0);
      });
    }
  }
}
    