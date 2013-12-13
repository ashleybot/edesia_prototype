// MAIN

// standard global variables
var container, scene, camera, renderer, controls, stats;
var keyboard = new THREEx.KeyboardState();

// custom global variables
var mesh, cy_mesh, texture;
var video, videoImage, videoImageContext, videoTexture;

init();
animate();

// FUNCTIONS
function init()
{
	var geometry, material;

	//VIDEO
	video = document.body.appendChild( document.createElement( 'video' ) );
  video.src = "../videos/center.mp4";
  video.type = "video/mp4";
  video.codecs = "avc1.42E01E, mp4a.40.2";
  video.autoplay = true;
  video.muted = true;
  video.style.display = 'none';

	// SCENE
	scene = new THREE.Scene();
	// CAMERA
	var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
	var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
  camera.position.set(10,90,300);
  var v = new THREE.Vector3(0,90,0);
  camera.lookAt(v);

	scene.add(camera);
	// RENDERER
	if ( Detector.webgl )
		renderer = new THREE.WebGLRenderer( {antialias:true} );
	else
		renderer = new THREE.CanvasRenderer();
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	container = document.getElementById( 'threed' );
	container.appendChild( renderer.domElement );
	// CONTROLS
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	// EVENTS
	THREEx.WindowResize(renderer, camera);
	THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });

	// STATS
	// stats = new Stats();
	// stats.domElement.style.position = 'absolute';
	// stats.domElement.style.bottom = '0px';
	// stats.domElement.style.zIndex = 100;
	// container.appendChild( stats.domElement );

	// LIGHT
	var light = new THREE.PointLight(0xaaaa00);
	light.position.set(0,250,0);
	scene.add(light);

	var inside_lights = new Array(6);
	inside_lights[0] = new THREE.AmbientLight(0xffffff);
	scene.add(inside_lights[0]);

	// FLOOR
	var floorTexture = new THREE.ImageUtils.loadTexture( 'static/images/3d_scene/water_deep.png' );
	floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
	floorTexture.repeat.set( 10, 10 );
	var floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
	var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.position.y = -0.5;
	floor.rotation.x = Math.PI / 2;
	scene.add(floor);

	// Cylinder Center

	geometry = new THREE.CylinderGeometry( 400, 400, 300, 50, 1, true );
  var image = document.createElement( 'canvas' );
  image.width = 680; // 480
  image.height = 240; //204
  imageContext = image.getContext( '2d' );
  // imageContext.lineWidth = 1 ;
  // imageContext.strokeStyle = '#ffffff';
  // imageContext.strokeRect(180, 80, 320, 244);

  var panoramaTexture = new THREE.ImageUtils.loadTexture( 'static/images/3d_scene/panoramaleft.jpg' );
  panoramaTexture.wrapS = THREE.RepeatWrapping;
  panoramaTexture.wrapT = THREE.RepeatWrapping;
  panoramaTexture.repeat.set( 1, 1 );
  // texture = new THREE.Texture( image );
  // texture.wrapS = THREE.RepeatWrapping;
  // texture.wrapT = THREE.RepeatWrapping;
  // texture.repeat.set( 1, 1 );
  // texture.repeat.x = 0.5;
  material = new THREE.MeshBasicMaterial( { map: panoramaTexture, overdraw: true, side: THREE.DoubleSide, transparent: true } );
  cy_mesh = new THREE.Mesh( geometry, material );
  cy_mesh.position.set( 0, 120, 0 );
  cy_mesh.rotation.set( 0, 2*Math.PI, 0 );
  cy_mesh.castShadow = true;
  cy_mesh.receiveShadow = true;
  scene.add( cy_mesh );

	///////////
	// Model //
	///////////

		var manager = new THREE.LoadingManager();
	manager.onProgress = function ( item, loaded, total ) {
		console.log( item, loaded, total );
	};

  var loader = new THREE.OBJMTLLoader();
  loader.load( 'static/3d_model/ship.obj', 'static/3d_model/ship.mtl', function ( object ) {
    object.rotation.set(0,3.14*2,0);
    object.scale.set(2*Math.PI,2*Math.PI,0);
    object.position.set(-25,0,50);
    object.scale.set(2,2,2);
    scene.add( object );
  });

// 	var manager = new THREE.LoadingManager();
// 	manager.onProgress = function ( item, loaded, total ) {
// 		console.log( item, loaded, total );
// 	};

//   var loader = new THREE.JSONLoader();
//   loader.load( "models/ship/ship.js", function( geometry ) {
//     mesh = new THREE.Mesh( geometry, new THREE.MeshNormalMaterial() );
//     mesh.rotation.set(2*Math.PI,2*Math.PI,0);
//     mesh.scale.set(2,2,2);
//     mesh.position.set(5,15,-50);
//     scene.add(mesh);
//   });
}

function animate()
{
  requestAnimationFrame( animate );
	render();
	update();
}

function update()
{
	if ( keyboard.pressed("p") )
		video.play();

	if ( keyboard.pressed("space") )
		video.pause();

	if ( keyboard.pressed("s") ) // stop video
	{
		video.pause();
		video.currentTime = 0;
	}

	if ( keyboard.pressed("r") ) // rewind video
		video.currentTime = 0;

	controls.update();
	//stats.update();
	// if ( video.readyState === video.HAVE_ENOUGH_DATA ) {
 //    imageContext.drawImage( video, 200, 100, 280, 204 );
 //    if ( texture ) texture.needsUpdate = true;
 //  }
}

function render()
{
	renderer.render( scene, camera );
}