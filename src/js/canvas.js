//import three
import * as THREE from 'three';
import * as utils from './utils';

import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const module = () => {
  const path = '/static/models/';
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });

  const sceneElements = [];
  function addScene(elem, fn) {
    sceneElements.push({ elem, fn });
  }

  function makeScene(elem) {
    const scene = new THREE.Scene();

    const fov = 45;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 1, 2);
    camera.lookAt(0, 0, 0);
    scene.add(camera);

    const controls = new TrackballControls(camera, elem);
    controls.noZoom = true;
    controls.noPan = true;

    {
      const light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(0, 10, 10);

      const light2 = new THREE.PointLight(0xd7c8ef, 1, 100);
      light2.position.set(10, 4, -10);
      scene.add(light2);
      scene.add(light);
    }

    return { scene, camera, controls };
  }

  const sceneInitFunctionsByName = {
    principe1: (elem) => {
      let root;
      let isLoaded = false;
      const modelName = elem.getAttribute('data-diagram') + '.gltf';
      const gtlfloader = new GLTFLoader();
      gtlfloader.load(path + modelName, (gltf) => {
        root = gltf.scene;
        scene.add(root);
        root.position.set(0, 0, 0);
        root.scale.set(20, 20, 20);
        root.rotation.set(0, 0, 0);
        root.receiveShadow = true;

        root.traverse((o) => {
          if (o.isMesh) {
            if (o.material.name == 'sol') {
              utils.changeMaterialColor(o.material, '#85FFEB');
              utils.changeEmissiveColor(o.material, '#333333');
            } else if (o.material.name == 'route') {
              utils.changeMaterialColor(o.material, '#85FFEB');
              utils.changeEmissiveColor(o.material, '#111111');
            } else if (o.material.name == 'desireLine') {
              utils.changeMaterialColor(o.material, '#6032AA');
              utils.changeEmissiveColor(o.material, '#6032AA');
            }
          }
        });

        isLoaded = true;
      });

      const { scene, camera, controls } = makeScene(elem);

      return (time, rect) => {
        if (isLoaded) {
          // root.rotation.y = time * 0.1;
          camera.aspect = rect.width / rect.height;
          camera.updateProjectionMatrix();
          controls.handleResize();
          controls.update();
          renderer.render(scene, camera);
        }
      };
    },

    biaisdecontour: (elem) => {
      let root;
      let isLoaded = false;
      const modelName = elem.getAttribute('data-diagram') + '.gltf';
      const gtlfloader = new GLTFLoader();
      gtlfloader.load(path + modelName, (gltf) => {
        root = gltf.scene;
        scene.add(root);
        root.position.set(0, 0, 0);
        root.scale.set(20, 20, 20);
        root.rotation.set(0, 0, 0);
        root.receiveShadow = true;

        root.traverse((o) => {
          if (o.isMesh) {
            if (o.material.name == 'rond') {
              utils.changeMaterialColor(o.material, '#85FFEB');
              utils.changeEmissiveColor(o.material, '#333333');
            } else if (o.material.name == 'carre') {
              utils.changeMaterialColor(o.material, '#6032AA');
              utils.changeEmissiveColor(o.material, '#6032AA');
            }
          }
        });

        isLoaded = true;
      });

      const { scene, camera, controls } = makeScene(elem);

      return (time, rect) => {
        if (isLoaded) {
          // root.rotation.y = time * 0.1;
          camera.aspect = rect.width / rect.height;
          camera.updateProjectionMatrix();
          controls.handleResize();
          controls.update();
          renderer.render(scene, camera);
        }
      };
    },

    hierarchie: (elem) => {
      let root;
      let isLoaded = false;
      const modelName = elem.getAttribute('data-diagram') + '.gltf';
      const gtlfloader = new GLTFLoader();
      gtlfloader.load(path + modelName, (gltf) => {
        root = gltf.scene;
        scene.add(root);
        root.position.set(0, 0, 0);
        root.scale.set(20, 20, 20);
        root.rotation.set(0, 0, 0);
        root.receiveShadow = true;

        root.traverse((o) => {
          if (o.isMesh) {
            if (o.material.name == 'rond') {
              utils.changeMaterialColor(o.material, '#85FFEB');
              utils.changeEmissiveColor(o.material, '#333333');
            } else if (o.material.name == 'carre') {
              utils.changeMaterialColor(o.material, '#6032AA');
              utils.changeEmissiveColor(o.material, '#6032AA');
            }
          }
        });

        isLoaded = true;
      });

      const { scene, camera, controls } = makeScene(elem);

      return (time, rect) => {
        if (isLoaded) {
          // root.rotation.y = time * 0.1;
          camera.aspect = rect.width / rect.height;
          camera.updateProjectionMatrix();
          controls.handleResize();
          controls.update();
          renderer.render(scene, camera);
        }
      };
    },
    trouversonchemin: (elem) => {
      let root;
      let isLoaded = false;
      const modelName = elem.getAttribute('data-diagram') + '.gltf';
      const gtlfloader = new GLTFLoader();
      gtlfloader.load(path + modelName, (gltf) => {
        root = gltf.scene;
        scene.add(root);
        root.position.set(0, 0, 0);
        root.scale.set(20, 20, 20);
        root.rotation.set(0, 0, 0);
        root.receiveShadow = true;
        root.traverse((o) => {
          if (o.isMesh) {
            if (o.material.name == 'rond') {
              utils.changeMaterialColor(o.material, '#85FFEB');
              utils.changeEmissiveColor(o.material, '#333333');
            } else if (o.material.name == 'carre') {
              utils.changeMaterialColor(o.material, '#6032AA');
              utils.changeEmissiveColor(o.material, '#6032AA');
            } else if (o.material.name == 'pierres') {
              utils.changeMaterialColor(o.material, '#AC8DDE');
              utils.changeEmissiveColor(o.material, '#333333');
            }
          }
        });

        isLoaded = true;
      });

      const { scene, camera, controls } = makeScene(elem);

      return (time, rect) => {
        if (isLoaded) {
          // root.rotation.y = time * 0.1;
          camera.aspect = rect.width / rect.height;
          camera.updateProjectionMatrix();
          controls.handleResize();
          controls.update();
          renderer.render(scene, camera);
        }
      };
    },

    surlignage: (elem) => {
      let root;
      let isLoaded = false;
      const modelName = elem.getAttribute('data-diagram') + '.gltf';
      const gtlfloader = new GLTFLoader();
      gtlfloader.load(path + modelName, (gltf) => {
        root = gltf.scene;
        scene.add(root);
        root.position.set(0, 0, 0);
        root.scale.set(20, 20, 20);
        root.rotation.set(0, 0, 0);
        root.receiveShadow = true;
        root.traverse((o) => {
          if (o.isMesh) {
            if (o.material.name == 'rond') {
              utils.changeMaterialColor(o.material, '#85FFEB');
              utils.changeEmissiveColor(o.material, '#333333');
            } else if (o.material.name == 'carre') {
              utils.changeMaterialColor(o.material, '#6032AA');
              utils.changeEmissiveColor(o.material, '#6032AA');
            }
          }
        });

        isLoaded = true;
      });

      const { scene, camera, controls } = makeScene(elem);

      return (time, rect) => {
        if (isLoaded) {
          // root.rotation.y = time * 0.1;
          camera.aspect = rect.width / rect.height;
          camera.updateProjectionMatrix();
          controls.handleResize();
          controls.update();
          renderer.render(scene, camera);
        }
      };
    },

    iteration: (elem) => {
      let root;
      let isLoaded = false;
      const modelName = elem.getAttribute('data-diagram') + '.gltf';
      const gtlfloader = new GLTFLoader();
      gtlfloader.load(path + modelName, (gltf) => {
        root = gltf.scene;
        scene.add(root);
        root.position.set(0, 0, 0);
        root.scale.set(20, 20, 20);
        root.rotation.set(0, 0, 0);
        root.receiveShadow = true;
        root.traverse((o) => {
          if (o.isMesh) {
            if (o.material.name == 'rond') {
              utils.changeMaterialColor(o.material, '#85FFEB');
              utils.changeEmissiveColor(o.material, '#333333');
            } else if (o.material.name == 'carre') {
              utils.changeMaterialColor(o.material, '#6032AA');
              utils.changeEmissiveColor(o.material, '#6032AA');
            }
          }
        });

        isLoaded = true;
      });

      const { scene, camera, controls } = makeScene(elem);

      return (time, rect) => {
        if (isLoaded) {
          // root.rotation.y = time * 0.1;
          camera.aspect = rect.width / rect.height;
          camera.updateProjectionMatrix();
          controls.handleResize();
          controls.update();
          renderer.render(scene, camera);
        }
      };
    },
  };

  document.querySelectorAll('[data-diagram]').forEach((elem) => {
    const sceneName = elem.dataset.diagram;
    const sceneInitFunction = sceneInitFunctionsByName[sceneName];
    const sceneRenderFunction = sceneInitFunction(elem);
    addScene(elem, sceneRenderFunction);
  });

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

  const clearColor = new THREE.Color('#000');
  function render(time) {
    time *= 0.001;

    resizeRendererToDisplaySize(renderer);

    renderer.setScissorTest(false);
    renderer.setClearColor(clearColor, 0);
    renderer.clear(true, true);
    renderer.setScissorTest(true);

    const transform = `translateY(${window.scrollY}px)`;
    renderer.domElement.style.transform = transform;

    for (const { elem, fn } of sceneElements) {
      // get the viewport relative position opf this element
      const rect = elem.getBoundingClientRect();
      const { left, right, top, bottom, width, height } = rect;

      const isOffscreen =
        bottom < 0 || top > renderer.domElement.clientHeight || right < 0 || left > renderer.domElement.clientWidth;

      if (!isOffscreen) {
        const positiveYUpBottom = renderer.domElement.clientHeight - bottom;
        renderer.setScissor(left, positiveYUpBottom, width, height);
        renderer.setViewport(left, positiveYUpBottom, width, height);

        fn(time, rect);
      }
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
};

export default module;
