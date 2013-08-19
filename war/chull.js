function createArray( length )
{
	var arr = new Array(length);
	for(var i = 0; i < length; i++)
		arr[i] = new Array();
	return arr;
}

var coord,
    faces,
    vlength,
    flength;

function getData()
{
	var x, y, z;
	console.log("here");
	$.ajax({
		url: "hull",
		type: "POST",
		data: points_3d,
		success: function( data ) {
			var lenCoord = data.vlength;
			var lenFaces = data.flength;
			console.log( lenCoord );
			console.log( lenFaces );
			coord = createArray( lenCoord );
			faces = createArray( lenFaces );
			
			for( var i in data.coordinates )
			{
				var coordinate = data.coordinates[i];
				coord[i][0] = parseFloat( coordinate.x );
				coord[i][1] = parseFloat( coordinate.y );
				coord[i][2] = parseFloat( coordinate.z );
			}
			vlength = data.vlength;
			flength = data.flength;
			
			for( var i in data.faces )
			{
				var face = data.faces[i];
			}
			
			for( var i in data.faces )
			{
				var face = data.faces[i];
				faces[i][0] = parseInt( face.f1 );
				faces[i][1] = parseInt( face.f2 );
				faces[i][2] = parseInt( face.f3 );
			}
			
			console.log( coord[0][0] );
			console.log( faces[0][0] );
			var geometry = new THREE.Geometry();
			
			for(var i = 0; i<vlength; i++)
			{
				geometry.vertices.push( new THREE.Vector3( coord[i][0], coord[i][1], coord[i][2] ) );
			}
			
			for(var i = 0; i<flength; i++)
			{
				geometry.faces.push( new THREE.Face3( faces[i][0], faces[i][1], faces[i][2] ) );
			}
			
			for(var i = 0; i<flength; i++)
			{
				geometry.faceVertexUvs[0].push([ new THREE.Vector2( 0.3, 0.3 ), 
					new THREE.Vector2( 0.3, 0.3 ), new THREE.Vector2( 0.3, 0.3 ) ]);
			}
			
			geometry.computeCentroids();
			geometry.computeFaceNormals();
			
			hull = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, color: 0x82CFE8 }));
			hullLines = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ wireframe: true, wireframeLinewidth: 2, color: 0xAAAAAA }));
			hull.overdraw = true;
			
			scene.add(hull);
			scene.add(hullLines);
			
			// particleSystem.rotation.y = 0.0;
			// hull.rotation.y = 0.0;
			// hullLines.rotation.y = 0.0;
			// camera.rotation.y = 0.0;
			// scene.rotation.y = 0.0;
			
			function doDraw()
			{
				// if(flag == 1)
				// {
					// particleSystem.rotation.y += 0.01;
					// hull.rotation.y += 0.01;
					// hullLines.rotation.y += 0.01;
				// }
				renderer.render( scene, camera );
				requestAnimationFrame( doDraw );
				controls.update();
			}
			//alert('success');
			
			doDraw();
		}
	});
}
