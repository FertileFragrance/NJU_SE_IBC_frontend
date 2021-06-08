import * as THREE from '../../libs/three.weapp.js'
import { OrbitControls } from '../../jsm/controls/OrbitControls'
Page({
  data: {
    canvasId: null
  },
  onLoad: function () {
    let interstitialAd = null

    // 在页面onLoad回调事件中创建插屏广告实例
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-cafab7df5fa5c9f9'
      })
      interstitialAd.onLoad(() => { })
      interstitialAd.onError((err) => { })
      interstitialAd.onClose(() => { })
    }

    // 在适合的场景显示插屏广告
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }
    wx.createSelectorQuery()
      .select('#webgl')
      .node()
      .exec((res) => {
        let canvasId = res[0].node._canvasId
        const canvas = THREE.global.registerCanvas(canvasId, res[0].node)
        this.setData({ canvasId })

        const camera = new THREE.PerspectiveCamera(70, canvas.width / canvas.height, 1, 1000);
        camera.position.z = 500;
        const scene = new THREE.Scene();
        // scene.background = new THREE.Color(0xf0f0f0);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true } );
        renderer.setClearColor(0xEEEEEE, 0.0)
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;
        // camera.position.set(200, 200, 500);
        controls.update();
        const geometry = new THREE.BoxBufferGeometry(200, 200, 200);

        // const texture = new THREE.TextureLoader().load('https://6e6f-normal-env-ta6pc-1300924598.tcb.qcloud.la/meinv/WechatIMG8.png?sign=0e9c0bf37f7cbe61b4fa6697a730207e&t=1582683776');
        // const material = new THREE.MeshBasicMaterial({ map: texture });
        const material = new THREE.MeshBasicMaterial({ color: 0xed3ed3 });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // renderer.setPixelRatio(wx.getSystemInfoSync().pixelRatio);
        // renderer.setSize(canvas.width, canvas.height);

        function onWindowResize() {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(canvas.width, canvas.height);
        }
        function render() {
          canvas.requestAnimationFrame(render);
          // mesh.rotation.x += 0.01;
          // mesh.rotation.y += 0.01;
          // controls.update();
          renderer.render(scene, camera);
        }

        render()

      })
  },
  onUnload: function () {
    THREE.global.unregisterCanvas(this.data.canvasId)
  },
  touchStart(e) {
    THREE.global.touchEventHandlerFactory('canvas', 'touchstart')(e)
  },
  touchMove(e) {
    THREE.global.touchEventHandlerFactory('canvas', 'touchmove')(e)
  },
  touchEnd(e) {
    THREE.global.touchEventHandlerFactory('canvas', 'touchend')(e)
  },
  touchCancel(e) {
    // console.log('canvas', e)
  },
  longTap(e) {
    // console.log('canvas', e)
  },
  tap(e) {
    // console.log('canvas', e)
  },
  documentTouchStart(e) {
    // console.log('document',e)
  },
  documentTouchMove(e) {
    // console.log('document',e)
  },
  documentTouchEnd(e) {
    // console.log('document',e)
  },
})
