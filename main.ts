scene.setBackgroundColor(8)
let PlayerImg = sprites.builtin.coin0
let ProjectileImg1 = sprites.castle.rock0
let ProjectileImg2 = sprites.duck.log5
let ItemImg = sprites.food.smallDonut
let PacMan = sprites.create(PlayerImg, SpriteKind.Player)
controller.moveSprite(PacMan, 100, 100)
PacMan.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(500, function () {
    sprites.createProjectileFromSide(ProjectileImg1, 50, 50)
})
