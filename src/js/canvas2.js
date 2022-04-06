import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

//import gltf loader
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const module = () => {
  function main() {
    const canvas = document.querySelector('.webgl-principe2');

    let isLoaded = false;
    let root;

    //make a renderer with a transparent background
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    // renderer.shadowMap.enabled = true;

    const gltfloar = new GLTFLoader();
    const path = '/static/models/principe1.gltf';

    gltfloar.load(path, (gltf) => {
      root = gltf.scene;
      scene.add(root);
      root.position.set(0, 0, 0);
      root.scale.set(100, 100, 100);
      root.rotation.set(0, 0, 0);
      root.receiveShadow = true;
      //   var newMaterial = new THREE.MeshStandardMaterial({
      //     color: 0x56b441,
      //     emissive: 0x444444,
      //     roughness: 1,
      //   });
      root.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          console.log(o.material.name);
          if (o.material.name == 'sol') {
            o.material.color.r = 1;
          } else if (o.material.name == 'route') {
            o.material.color.g = 1;
          } else if (o.material.name == 'desireLine') {
            o.material.color.b = 1;
          }
        }
      });

      isLoaded = true;
    });

    const fov = 75;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 50;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 3;
    camera.position.x = 4;
    camera.position.y = 3;

    const scene = new THREE.Scene();

    const skyColor = 0xb1e1ff; // light blue
    const intensity = 1;
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 10, 10);

    const light2 = new THREE.PointLight(0xffffff, 1, 100);
    light2.position.set(10, 4, -10);
    scene.add(light2);
    scene.add(light);

    const sphereSize = 1;
    const pointLightHelper = new THREE.PointLightHelper(light2, sphereSize);
    // scene.add(pointLightHelper);

    //create controls for the camera
    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 0, 0);
    controls.update();

    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    function render(time) {
      time *= 0.001;

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      if (isLoaded) {
        const speed = 0.1;
        const rot = time * speed;
        root.rotation.y = rot;
      }

      renderer.render(scene, camera);

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }

  main();
};

export default module;
