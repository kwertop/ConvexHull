var points_3d = {
	coordinates : []
};

function createArray( length )
{
	var arr = new Array(length);
	for(var i = 0; i < length; i++)
		arr[i] = new Array();
	return arr;
}

var counter=0,
	check=0,
	flag=0;

var renderer,
    scene,
    camera,
    controls,
    meshMaterial,
    container,
    particleSystem,
	hull,
	hullLines,
	numPoints=500;

var UIText = function () {
	//this['Number of Points'] = 500;
	// this.Rotate = false;
	this.Clear = function() { check = 0; flag = 0; console.log(flag); console.log(check); clearAll();};
	this.showHull = function() { 
					if(check == 0){
						console.log("here"); 
						check=1;
						getData();
					} 	
				};
	this.showPoints = function() { 
					var num = numPoints;
					// console.log("here");
					// console.log(num);
					// console.log(flag);
					// console.log("here ends");
					counter = (counter+1)%7;
					clearAll();
					generateParticles(num, counter);
				};
};
	
window.onload = function() {
	if( !Detector.webgl )	Detector.addGetWebGLMessage();
	
	// counter = 0;
	// check = 1;
	// flag = 1;
	
	renderer = new THREE.WebGLRenderer({ antialias : false, alpha: false, stencil: false});
	container = document.createElement( 'div' );
	document.body.appendChild( container );
	container.appendChild( renderer.domElement );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor( 0x000000, 1.0 );
	
	var gui = new dat.GUI();
	var object = new UIText();
	gui.add(object, 'showPoints');
	gui.add(object, 'showHull');
	// var controller = gui.add(object, 'Rotate');
	gui.add(object, 'Clear');
	// controller.onChange(function(newValue) {
				// if(newValue == true)
					// flag = 1;
	// });
	
	scene = new THREE.Scene();
	
	meshMaterial = new THREE.MeshBasicMaterial({ color: 0xFF00FF, wireFrame: true });
	
	axes = buildAxes( 20000 );
	scene.add( axes );
	
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 1, 10000 );
	camera.position.set( 30, 50, 1000 );
	camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
	
	controls = new THREE.TrackballControls( camera, renderer.domElement );
	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 0.2;
	controls.panSpeed = 0.8;
	
	controls.noZoom = false;
	controls.noPan = false;
	
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;
	
	function buildAxes( length ) {
		var axes = new THREE.Object3D();
		
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( length, 0, 0 ), 0xFF0000, false ) );
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( -length, 0, 0 ), 0xFF0000, true ) );
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, length, 0 ), 0x00FF00, false ) );
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, -length, 0 ), 0x00FF00, true ) );
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, length ), 0x0000FF, false ) );
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, -length ), 0x0000FF, true ) );
		
		return axes;
	}
	
	function buildAxis(src, dst, colorHex, dashed) {
		var geom = new THREE.Geometry(),
		    mat;
		
		if( dashed ) {
			mat = new THREE.LineDashedMaterial({ linewidth: 3, color: colorHex, dashSize: 3, gapSize: 3 });
		}
		else {
			mat = new THREE.LineBasicMaterial({ linewidth: 3, color: colorHex });
		}
		
		geom.vertices.push( src.clone() );
		geom.vertices.push( dst.clone() );
		geom.computeLineDistances();
		
		var axis = new THREE.Line( geom, mat, THREE.LinePieces );
		
		return axis;
	}
	
	generateParticles(500, 0);
	
	function animate() {
		renderer.render( scene, camera );
		requestAnimationFrame( animate );
		controls.update();
	}
	
	animate();
}

function generateParticles(number, flag) {
	if(flag == 0)
		diamond1(number);
	else if(flag == 1)
		diamond2(number);
	else if(flag == 2)
		cube(number);
	else if(flag == 3)
		parabola1(number);
	else if(flag == 4)
		hyperbola(number);
	else if(flag == 5)
		scurve(number);
	else
		parabola2(number);
}

function clearAll() {

	points_3d = { coordinates : [] };
	
	scene.remove(particleSystem);
	scene.remove(hull);
	scene.remove(hullLines);
	
	return;
	// particleSystem.particles.dispose();
	// hull.geometry.dispose();
	// hullLines.geometry.dispose();
	
}
