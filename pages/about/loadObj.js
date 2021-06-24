import getDDSLoader from '../../jsm/loaders/DDSLoader.js';
import getMTLLoader from '../../jsm/loaders/MTLLoader.js';
import getOBJLoader from '../../jsm/loaders/OBJLoader.js';
import { OrbitControls } from '../../jsm/controls/OrbitControls';

export default function (canvas, THREE) {
    let { DDSLoader } = getDDSLoader(THREE);
    let { MTLLoader } = getMTLLoader(THREE);
    let OBJLoader = getOBJLoader(THREE);
    let window = THREE.global;

    let camera, scene, renderer, controls;

    let object;

    init();
    animate();

    let fov = 45;
    let near = 0.1;

    function init() {
        //renderer
        {
            renderer = new THREE.WebGLRenderer({ canvas });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        //camera
        {
            camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 1, 2000);
            camera.position.z = 250;
        }
        //controls
        {
            controls = new OrbitControls(camera, canvas);
            controls.target.set(0, 5, 0);
            controls.update();
        }

        // scene & light
        {
            scene = new THREE.Scene();

            // let ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
            // scene.add(ambientLight);

            let pointLight = new THREE.PointLight(0xffffff, 0.5);
            camera.add(pointLight);
            scene.add(camera);

            renderer.setClearColor(0xffffff,1.0);
        }
        
        // manager
        function loadModel() {

            object.traverse(function (child) {

                //if (child.isMesh) child.material.map = texture;

            });

            object.position.y = 50;
            scene.add(object);

        }

        let manager = new THREE.LoadingManager(loadModel);
        manager.onProgress = function (item, loaded, total) {
            console.log(item, loaded, total);
        };

        // texture     
        // let textureLoader = new THREE.TextureLoader(manager)
        // let texture = textureLoader.load('https://threejs.org/examples/textures/uv_grid_opengl.jpg');

        // model
        function onProgress(xhr) {
            if (xhr.lengthComputable) {
                let percentComplete = xhr.loaded / xhr.total * 100;
                console.log('model ' + Math.round(percentComplete, 2) + '% downloaded');
            }
        }

        function onError() { }

        let mtlLoader = new MTLLoader(manager);
	    // mtlLoader.setPath('../../models/');
		mtlLoader.load('http://mycprotein.myqnapcloud.cn:39010/computernetwork/platform.mtl?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20210624%2F%2Fs3%2Faws4_request&X-Amz-Date=20210624T161634Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0f2f2f2dbd2fbcc353dd2a81eb3d41ec68624e8a948ea03b5de3819c236af165', function(materials) {
			
		    materials.preload();
			
		    let objLoader = new OBJLoader(manager);
		    objLoader.setMaterials(materials);
		    // objLoader.setPath('../../models/');
			objLoader.load('http://mycprotein.myqnapcloud.cn:39010/computernetwork/platform.obj?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20210624%2F%2Fs3%2Faws4_request&X-Amz-Date=20210624T161648Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=76b541bbd9ce506d4d60ec67213310150af061560255ed39432af49edc8c39bd', function(obj) {
                object = obj;
                var box3 = new THREE.Box3();
                box3.setFromObject(obj);
                var size_temp = box3.getSize();
                obj.scale.set(100 / size_temp.x, 100 / size_temp.y, 100 / size_temp.z);
			    }, onProgress, onError);
			}, onProgress, onError);

        // let loader = new OBJLoader(manager);

        // loader.load('http://mycprotein.myqnapcloud.cn:39010/computernetwork/platform.obj?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20210624%2F%2Fs3%2Faws4_request&X-Amz-Date=20210624T161648Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=76b541bbd9ce506d4d60ec67213310150af061560255ed39432af49edc8c39bd', function (obj) {
        //     object = obj;
        //     var box3 = new THREE.Box3();
        //     box3.setFromObject(obj);
        //     var size_temp = box3.getSize();
        //     obj.scale.set(100 / size_temp.x, 100 / size_temp.y, 100 / size_temp.z);
        //     //obj.rotation.y = degree*3.14159265/180;
        // }, onProgress, onError);

        window.addEventListener('mousewheel', mousewheel, false);
    }

    function mousewheel(e) {
        e.preventDefault();
        console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
        //e.stopPropagation();  
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件  
            if (e.wheelDelta > 0) { //当滑轮向上滚动时  
                fov -= (near < fov ? 1 : 0);
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时  
                fov += (fov < far ? 1 : 0);
            }
        } else if (e.detail) {  //Firefox滑轮事件  
            if (e.detail > 0) { //当滑轮向上滚动时  
                fov -= 1;
            }
            if (e.detail < 0) { //当滑轮向下滚动时  
                fov += 1;
            }
        }
        camera.fov = fov;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);

    }

    function animate() {
        canvas.requestAnimationFrame(animate);
        render();
    }

    function render() {
        camera.lookAt(scene.position);
        controls.update();
        renderer.render(scene, camera);
    }

}