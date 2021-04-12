import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../c4a799c1-9ef8-4787-914e-4f8c15357881/src/item"
import Script2 from "../cc309926-283a-4e0f-b0a4-97659437f3bc/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const pond = new Entity('pond')
engine.addEntity(pond)
pond.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(6.5, 0, 15),
  rotation: new Quaternion(-1.10062582369541e-15, -0.6343932747840881, 7.562556447737734e-8, 0.7730104327201843),
  scale: new Vector3(1.2500007152557373, 1, 1.9999998807907104)
})
pond.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("models/Pond_01/Pond_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
pond.addComponentOrReplace(gltfShape)

const shrub = new Entity('shrub')
engine.addEntity(shrub)
shrub.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(20, 0, 1.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shrub.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("models/Bush_01/Bush_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
shrub.addComponentOrReplace(gltfShape2)

const shrub2 = new Entity('shrub2')
engine.addEntity(shrub2)
shrub2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(13.5, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shrub2.addComponentOrReplace(transform4)
shrub2.addComponentOrReplace(gltfShape2)

const evergreenShrub = new Entity('evergreenShrub')
engine.addEntity(evergreenShrub)
evergreenShrub.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(3.5, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
evergreenShrub.addComponentOrReplace(transform5)
const gltfShape3 = new GLTFShape("models/Bush_03/Bush_03.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
evergreenShrub.addComponentOrReplace(gltfShape3)

const bush = new Entity('bush')
engine.addEntity(bush)
bush.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(8, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush.addComponentOrReplace(transform6)
const gltfShape4 = new GLTFShape("models/Bush_02/Bush_02.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
bush.addComponentOrReplace(gltfShape4)

const cobblestoneMountain = new Entity('cobblestoneMountain')
engine.addEntity(cobblestoneMountain)
cobblestoneMountain.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(24, 0, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
cobblestoneMountain.addComponentOrReplace(transform7)
const gltfShape5 = new GLTFShape("models/Mountain_01/Mountain_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
cobblestoneMountain.addComponentOrReplace(gltfShape5)

const brownMountain = new Entity('brownMountain')
engine.addEntity(brownMountain)
brownMountain.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(11, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2, 1.5)
})
brownMountain.addComponentOrReplace(transform8)
const gltfShape6 = new GLTFShape("models/Mountain_02/Mountain_02.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
brownMountain.addComponentOrReplace(gltfShape6)

const imageBillboardBlack = new Entity('imageBillboardBlack')
engine.addEntity(imageBillboardBlack)
imageBillboardBlack.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(16, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 2.5, 1)
})
imageBillboardBlack.addComponentOrReplace(transform9)

const tripleSpotlight = new Entity('tripleSpotlight')
engine.addEntity(tripleSpotlight)
tripleSpotlight.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(20.5, 0, 12.5),
  rotation: new Quaternion(-0.9951847195625305, -6.5948486024903184e-15, 1.1863525628541538e-7, 0.09801708161830902),
  scale: new Vector3(1, 0.9999999403953552, 0.9999999403953552)
})
tripleSpotlight.addComponentOrReplace(transform10)

const spotlight = new Entity('spotlight')
engine.addEntity(spotlight)
spotlight.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(2, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spotlight.addComponentOrReplace(transform11)
const gltfShape7 = new GLTFShape("models/Spotlight.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
spotlight.addComponentOrReplace(gltfShape7)

const spotlight2 = new Entity('spotlight2')
engine.addEntity(spotlight2)
spotlight2.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(30.5, 0, 21.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spotlight2.addComponentOrReplace(transform12)
spotlight2.addComponentOrReplace(gltfShape7)

const spotlight3 = new Entity('spotlight3')
engine.addEntity(spotlight3)
spotlight3.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(2.5, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spotlight3.addComponentOrReplace(transform13)
spotlight3.addComponentOrReplace(gltfShape7)

const spotlight4 = new Entity('spotlight4')
engine.addEntity(spotlight4)
spotlight4.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(30.5, 0, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spotlight4.addComponentOrReplace(transform14)
spotlight4.addComponentOrReplace(gltfShape7)

const spotlight5 = new Entity('spotlight5')
engine.addEntity(spotlight5)
spotlight5.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(10, 0, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spotlight5.addComponentOrReplace(transform15)
spotlight5.addComponentOrReplace(gltfShape7)

const spotlight6 = new Entity('spotlight6')
engine.addEntity(spotlight6)
spotlight6.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(22.5, 0, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spotlight6.addComponentOrReplace(transform16)
spotlight6.addComponentOrReplace(gltfShape7)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape8 = new GLTFShape("models/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
entity.addComponentOrReplace(gltfShape8)
const transform17 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform17)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape8)
const transform18 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform18)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape8)
const transform19 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform19)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape8)
const transform20 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform20)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
script1.init(options)
script2.init(options)
script1.spawn(imageBillboardBlack, {"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hollywood_Sign_%28Zuschnitt%29.jpg/1200px-Hollywood_Sign_%28Zuschnitt%29.jpg"}, createChannel(channelId, imageBillboardBlack, channelBus))
script2.spawn(tripleSpotlight, {"startOn":true,"clickable":true,"onActivate":[{"entityName":"tripleSpotlight","actionId":"activate","values":{}}]}, createChannel(channelId, tripleSpotlight, channelBus))