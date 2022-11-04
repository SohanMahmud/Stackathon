import React from 'react';
import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const points2 = [];
points2.push(new THREE.Vector3(0, -20, 0));
points2.push(new THREE.Vector3(0, 10, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const geometry2 = new THREE.BufferGeometry().setFromPoints(points2);

const line = new THREE.Line(geometry, material);
const line2 = new THREE.Line(geometry2, material);

scene.add(line);
scene.add(line2);

function animate() {
  requestAnimationFrame(animate);

  //line.rotation.x += 0.01;
  line.rotation.y += 0.01;
  //line2.rotation.x += 0.01;
  line2.rotation.y += 0.01;

  renderer.render(scene, camera);
}
class Line extends React.Component {
  render() {
    return animate();
  }
}

export default Line;
