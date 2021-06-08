import * as THREE from '../../libs/three.weapp'
import loadObj from './loadObj'

const app = getApp()
Page({
  data: {
    img: '../../img/7.jpg',
    title:'这是一个测试的页面',
    intre:'南京大学软件学院是教育部首批国家级示范性软件学院，依托软件工程一级（A类）学科和计算机软件新技术国家重点实验室，建有“江苏省实验教学中心--软件工程实验教学中心”和“国家级实验教学中心--计算机科学与软件工程实验教学中心”（与计算机科学与技术系共建）等教学平台，以及“南京大学应用软件工程技术中心”等科研机构。</p>',
    contab:'联系方式',
    address:'鼎里',
    mobile:'021-5555555',
    email:'1234567'
  },
  onLoad: function () {
    wx.createSelectorQuery()
    .select('#c')
    .node()
    .exec((res) => {
      const canvas = new THREE.global.registerCanvas(res[0].node)
			loadObj(canvas, THREE)

    })
  },

  onUnload: function () {
		THREE.global.clearCanvas()
	},
	touchStart(e) {
		// console.log('canvas', e)
		THREE.global.touchEventHandlerFactory('canvas', 'touchstart')(e)
	},
	touchMove(e) {
		// console.log('canvas', e)
		THREE.global.touchEventHandlerFactory('canvas', 'touchmove')(e)
	},
	touchEnd(e) {
		// console.log('canvas', e)
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

})
