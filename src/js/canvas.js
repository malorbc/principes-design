import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

//import gltf loader
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const module = () => {
  function main() {
    const canvas = document.querySelector('.webgl-principe1');

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

      root.traverse((o) => {
        if (o.isMesh) {
          if (o.material.name == 'sol') {
            changeMaterialColor(o.material, '#85FFEB');
            changeEmissiveColor(o.material, '#333333');
          } else if (o.material.name == 'route') {
            changeMaterialColor(o.material, '#85FFEB');
            changeEmissiveColor(o.material, '#111111');
          } else if (o.material.name == 'desireLine') {
            changeMaterialColor(o.material, '#6032AA');
            changeEmissiveColor(o.material, '#6032AA');
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

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 10, 10);

    const light2 = new THREE.PointLight(0xd7c8ef, 1, 100);
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

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  function rgbToPercents(rgb) {
    return {
      r: rgb.r / 255,
      g: rgb.g / 255,
      b: rgb.b / 255,
    };
  }

  function changeMaterialColor(mat, hex) {
    const rgb = hexToRgb(hex);
    const ratio = rgbToPercents(rgb);
    mat.color.r = ratio.r;
    mat.color.g = ratio.g;
    mat.color.b = ratio.b;
  }

  function changeEmissiveColor(mat, hex) {
    const rgb = hexToRgb(hex);
    const ratio = rgbToPercents(rgb);
    mat.emissive.r = ratio.r;
    mat.emissive.g = ratio.g;
    mat.emissive.b = ratio.b;
  }
};

export default module;
