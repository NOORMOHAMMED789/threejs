/*
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import Stats from 'three/addons/libs/stats.module.js'
import { GUI } from 'dat.gui'

const scene = new THREE.Scene()
const stats = new Stats()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 1.5

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

document.body.appendChild(stats.dom)


const sceneA = new THREE.Scene()
const sceneB = new THREE.Scene()
const sceneC = new THREE.Scene()

new OrbitControls(camera, renderer.domElement)
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshNormalMaterial({ wireframe: true })

sceneA.background = new THREE.Color(0x123456)
sceneB.background = new THREE.TextureLoader().load('https://sbcode.net/img/grid.png')
sceneC.background = new THREE.CubeTextureLoader()
.setPath('https://sbcode.net/img/')
.load(['px.png','nx.png','py.png','nx.png','pz.png','nx.png'])

const cube = new THREE.Mesh(geometry, material)
sceneA.add(cube)



// const gui = new GUI()
// const cubeFolder = gui.addFolder('Cube')
// cubeFolder.add(cube.rotation, "x", 0, Math.PI*2)
// cubeFolder.add(cube.rotation, "y", 0, Math.PI*2)
// cubeFolder.add(cube.rotation, "z", 0, Math.PI*2)
// cubeFolder.open()

// const cameraFolder = gui.addFolder('Camera');
// cameraFolder.add(camera.position, 'z', 0, 20)
// cameraFolder.open()

let activeScene = sceneA
const setScene = {
  sceneA: function() {
    activeScene = sceneA
  },
  sceneB: function() {
    activeScene = sceneB
  },
  sceneC: function() {
    activeScene = sceneC
  }
}

const gui = new GUI()
gui.add(setScene, 'sceneA').name('Scene A')
gui.add(setScene, 'sceneB').name('Scene B')
gui.add(setScene, 'sceneC').name('Scene C')

function animate() {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(activeScene, camera)
  stats.update()
}

animate()




import './style.css'
import * as THREE from 'three'
import Stats from 'three/addons/libs/stats.module.js'
import { GUI } from 'dat.gui'

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper())

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0, 2, 3)
camera.lookAt(0, 0.5, 0)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshNormalMaterial({ wireframe: true })

const cube = new THREE.Mesh(geometry, material)
cube.position.y = 0.5
scene.add(cube)

const stats = new Stats()
document.body.appendChild(stats.dom)

const gui = new GUI()

const cameraFolder = gui.addFolder('Camera')
cameraFolder.add(camera.position, 'x', -10, 10)
cameraFolder.add(camera.position, 'y', -10, 10)
cameraFolder.add(camera.position, 'z', -10, 10)
cameraFolder.add(camera, 'fov', 0, 180, 0.01).onChange(() => {
  camera.updateProjectionMatrix()
})
cameraFolder.add(camera, 'aspect', 0.00001, 10).onChange(() => {
  camera.updateProjectionMatrix()
})
cameraFolder.add(camera, 'near', 0.01, 10).onChange(() => {
  camera.updateProjectionMatrix()
})
cameraFolder.add(camera, 'far', 0.01, 10).onChange(() => {
  camera.updateProjectionMatrix()
})
cameraFolder.open()

function animate() {
  requestAnimationFrame(animate)

  //camera.lookAt(0, 0.5, 0)

  renderer.render(scene, camera)

  stats.update()
}

animate()


//Below code is for the how to use renderer
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 1.5

// const canvas = document.getElementById('canvas') as HTMLCanvasElement
const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

new OrbitControls(camera, renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshNormalMaterial({ wireframe: true })

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

function animate() {
  requestAnimationFrame(animate)

  renderer.render(scene, camera)
}

animate()



//Animation loop
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 1.5

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.render(scene, camera)
})

const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change', function() {
  renderer.render(scene, camera)
})

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshNormalMaterial({ wireframe: true })

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const stats = new Stats()
document.body.appendChild(stats.dom)

// const clock = new THREE.Clock
function animate() {
  requestAnimationFrame(animate)

//   let delta = clock.getDelta()
//   cube.rotation.x += 1 * delta
//   cube.rotation.y += 2 * delta


  stats.update()
}

animate()

renderer.render(scene, camera)


//Object 3D
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'
import { GUI } from 'dat.gui'

const scene = new THREE.Scene()
scene.add(new THREE.AxesHelper(5))

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(1, 2, 3)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

new OrbitControls(camera, renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshNormalMaterial({ wireframe: true })

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const stats = new Stats()
document.body.appendChild(stats.dom)

const gui = new GUI()

const cubeFolder = gui.addFolder('Cube')
cubeFolder.add(cube, 'visible')
cubeFolder.open()

const positionFolder = cubeFolder.addFolder('Position')
positionFolder.add(cube.position, 'x', -5, 5)
positionFolder.add(cube.position, 'y', -5, 5)
positionFolder.add(cube.position, 'z', -5, 5)
positionFolder.open()

const rotationFolder = cubeFolder.addFolder('Rotation')
rotationFolder.add(cube.rotation, 'x', 0, Math.PI * 2)
rotationFolder.add(cube.rotation, 'y', 0, Math.PI * 2)
rotationFolder.add(cube.rotation, 'z', 0, Math.PI * 2)
rotationFolder.open()

const scaleFolder = cubeFolder.addFolder('Scale')
scaleFolder.add(cube.scale, 'x', -5, 5)
scaleFolder.add(cube.scale, 'y', -5, 5)
scaleFolder.add(cube.scale, 'z', -5, 5)
scaleFolder.open()

function animate() {
  requestAnimationFrame(animate)

  renderer.render(scene, camera)

  stats.update()
}

animate()

*/

//Object 3D Hirerachy
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'
import { GUI } from 'dat.gui'

const scene = new THREE.Scene()
scene.add(new THREE.AxesHelper(5))

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(4, 4, 4)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set(8, 0, 0)
controls.update()

const light = new THREE.PointLight(0xffffff, 400)
light.position.set(10, 10, 10)
scene.add(light)

const object1 = new THREE.Mesh(new THREE.SphereGeometry(), new THREE.MeshPhongMaterial({ color: 0xff0000 }))
object1.position.set(4, 0, 0)
scene.add(object1)
object1.add(new THREE.AxesHelper(5))

const object2 = new THREE.Mesh(new THREE.SphereGeometry(), new THREE.MeshPhongMaterial({ color: 0x00ff00 }))
object2.position.set(4, 0, 0)
object1.add(object2)
object2.add(new THREE.AxesHelper(5))

const object3 = new THREE.Mesh(new THREE.SphereGeometry(), new THREE.MeshPhongMaterial({ color: 0x0000ff }))
object3.position.set(4, 0, 0)
object2.add(object3)
object3.add(new THREE.AxesHelper(5))

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

const gui = new GUI()
const object1Folder = gui.addFolder('Object1 (Red Ball)')
object1Folder.add(object1.position, 'x', 0, 10, 0.01).name('X Position')
object1Folder.add(object1.rotation, 'x', 0, Math.PI * 2, 0.01).name('X Rotation')
object1Folder.add(object1.scale, 'x', 0, 2, 0.01).name('X Scale')
object1Folder.add(object1, 'visible', 0, 2, 0.01).name('Visible')
object1Folder.open()
const object2Folder = gui.addFolder('Object2 (Green Ball)')
object2Folder.add(object2.position, 'x', 0, 10, 0.01).name('X Position')
object2Folder.add(object2.rotation, 'x', 0, Math.PI * 2, 0.01).name('X Rotation')
object2Folder.add(object2.scale, 'x', 0, 2, 0.01).name('X Scale')
object2Folder.add(object2, 'visible', 0, 2, 0.01).name('Visible')
object2Folder.open()
const object3Folder = gui.addFolder('Object3 (Blue Ball)')
object3Folder.add(object3.position, 'x', 0, 10, 0.01).name('X Position')
object3Folder.add(object3.rotation, 'x', 0, Math.PI * 2, 0.01).name('X Rotation')
object3Folder.add(object3.scale, 'x', 0, 2, 0.01).name('X Scale')
object3Folder.add(object3, 'visible', 0, 2, 0.01).name('Visible')
object3Folder.open()

const stats = new Stats()
document.body.appendChild(stats.dom)

const debug = document.getElementById('debug') as HTMLDivElement

function animate() {
  requestAnimationFrame(animate)

  renderer.render(scene, camera)

  const object1WorldPosition = new THREE.Vector3()
  object1.getWorldPosition(object1WorldPosition)
  const object2WorldPosition = new THREE.Vector3()
  object2.getWorldPosition(object2WorldPosition)
  const object3WorldPosition = new THREE.Vector3()
  object3.getWorldPosition(object3WorldPosition)

  debug.innerText =
    'Red\n' +
    'Local Pos X : ' +
    object1.position.x.toFixed(2) +
    '\n' +
    'World Pos X : ' +
    object1WorldPosition.x.toFixed(2) +
    '\n' +
    '\nGreen\n' +
    'Local Pos X : ' +
    object2.position.x.toFixed(2) +
    '\n' +
    'World Pos X : ' +
    object2WorldPosition.x.toFixed(2) +
    '\n' +
    '\nBlue\n' +
    'Local Pos X : ' +
    object3.position.x.toFixed(2) +
    '\n' +
    'World Pos X : ' +
    object3WorldPosition.x.toFixed(2) +
    '\n'

  stats.update()
}

animate()