import * as THREE from "three";

const canvas = document.getElementById("app") as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const mainCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
mainCamera.position.set(0, 1, 5);
const mainScene = new THREE.Scene();

const testGeometry = new THREE.BoxGeometry();
const testMat = new THREE.MeshStandardMaterial({ color: 0xf9c6d2 });
const testCube = new THREE.Mesh(testGeometry, testMat);

const light = new THREE.AmbientLight(0xffffff, 1);

mainScene.add(light);
mainScene.add(testCube);
renderer.render(mainScene, mainCamera);
