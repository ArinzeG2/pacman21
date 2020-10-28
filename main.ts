namespace SpriteKind {
    export const Treasure = SpriteKind.create()
}
let r: Sprite = null
let q: Sprite = null
let p = null
scene.setBackgroundColor(8)
let PlayerImg = sprites.castle.heroWalkFront1
let ProjectileImg1 = sprites.castle.rock0
let ProjectileImg2 = sprites.duck.log5
let ItemImg = sprites.dungeon.collectibleBlueCrystal
let pacMan = sprites.create(PlayerImg, SpriteKind.Player)
controller.moveSprite(pacMan, 100, 100)
pacMan.setFlag(SpriteFlag.StayInScreen, true)
let orb = sprites.create(ItemImg, SpriteKind.Treasure)
orb.setPosition(randint(10, 150), randint(10, 110))
game.onUpdateInterval(800, function () {
    q = sprites.createProjectileFromSide(ProjectileImg1, 0, 50)
    q.setPosition(randint(0, 160), 0)
})
// spawn projectile
game.onUpdateInterval(800, function () {
    r = sprites.createProjectileFromSide(ProjectileImg2, 50, 0)
    r.setPosition(0, randint(0, 120))

})

info.setLife(10)
//when player obtains orb
sprites.onOverlap(SpriteKind.Player, SpriteKind.Treasure, function(sprite: Sprite, otherSprite: Sprite) {
    orb.setPosition(randint(10, 150), randint(10, 110))
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
    pacMan.startEffect(effects.spray,200)
})

game.onUpdate(function() { 
    if (info.score() == 150){
        game.over(true)
    }
})