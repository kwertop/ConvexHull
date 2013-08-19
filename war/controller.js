function diamond1(num)
{
	var particleCount = num,
	    pMaterial = new THREE.ParticleBasicMaterial({ color: 0x5DF5B6, size: 5 }),
	    particles = new THREE.Geometry();
	    
	var lim1 = 2*num/5;
	var lim2 = num - lim1;
	
	//points_3d.coordinates.push({ "particleCount": particleCount });
	for(var p = 0; p < 200; p++) {
		var pX = Math.random()*200;
		var pZ = Math.random()*200;
		var pY = Math.random()*200;
		
		var particle = new THREE.Vector3( pX, pY, pZ );
		points_3d.coordinates.push({ "x": pX, "y": pY, "z": pZ });
		particles.vertices.push( particle );
	}
	
	for(var p = 0; p < 300; p++) {
		var pX = -Math.random()*500;
		var pZ = -Math.random()*500;
		var pY = -Math.random()*500;
		
		var particle = new THREE.Vector3( pX, pY, pZ );
		points_3d.coordinates.push({ "x": pX, "y": pY, "z": pZ });
		particles.vertices.push( particle );
	}
	
	particleSystem = new THREE.ParticleSystem( particles, pMaterial );
	
	scene.add(particleSystem);	
	particleSystem.sortParticles = true;
}

function diamond2(num) {
	var particleCount = num,
	    pMaterial = new THREE.ParticleBasicMaterial({ color: 0x5DF5B6, size: 5 }),
	    particles = new THREE.Geometry();
	
	var l = particleCount/10;
	
	//points_3d.coordinates.push({ "particleCount": particleCount });
	for(var p = 0; p < particleCount-l; p++) {
		var pX = Math.random()*particleCount - particleCount/2;
		var pZ = Math.random()*particleCount - particleCount/2;
		var pY = Math.random()*particleCount - particleCount/2;
		
		var particle = new THREE.Vector3( pX, pY, pZ );
		points_3d.coordinates.push({ "x": pX, "y": pY, "z": pZ });
		particles.vertices.push( particle );
	}
	
	for(var p=0; p<l/2; p++) {
		var pX = Math.random()*particleCount*2;
		var pZ = Math.random()*particleCount*2;
		var pY = Math.random()*particleCount*2;
		
		var particle = new THREE.Vector3( pX, pY, pZ );
		points_3d.coordinates.push({ "x": pX, "y": pY, "z": pZ });
		particles.vertices.push( particle );
	}
	
	for(var p=l/2; p<l; p++) {
		var pX = -Math.random()*particleCount*2;
		var pZ = -Math.random()*particleCount*2;
		var pY = -Math.random()*particleCount*2;
		
		var particle = new THREE.Vector3( pX, pY, pZ );
		points_3d.coordinates.push({ "x": pX, "y": pY, "z": pZ });
		particles.vertices.push( particle );
	}
	particleSystem = new THREE.ParticleSystem( particles, pMaterial );
	
	scene.add(particleSystem);	
	particleSystem.sortParticles = true;
}

function cube(num) {
	var particleCount = num,
	    pMaterial = new THREE.ParticleBasicMaterial({ color: 0x5DF5B6, size: 5 }),
	    particles = new THREE.Geometry();
	
	//points_3d.coordinates.push({ "particleCount": particleCount });
	for(var p = 0; p < particleCount; p++) {
		var pX = Math.random()*particleCount - particleCount/2;
		var pZ = Math.random()*particleCount - particleCount/2;
		var pY = Math.random()*particleCount - particleCount/2;
		
		var particle = new THREE.Vector3( pX, pY, pZ );
		points_3d.coordinates.push({ "x": pX, "y": pY, "z": pZ });
		particles.vertices.push( particle );
	}
	
	particleSystem = new THREE.ParticleSystem( particles, pMaterial );
	
	scene.add(particleSystem);	
	particleSystem.sortParticles = true;
}

function parabola1(num) {
	var particleCount = num,
	    pMaterial = new THREE.ParticleBasicMaterial({ color: 0x5DF5B6, size: 5 }),
	    particles = new THREE.Geometry();
	
	//points_3d.coordinates.push({ "particleCount": particleCount });
	for(var p = 0; p < particleCount; p++) {
		var pX = Math.random()*particleCount - particleCount/2;
		var pZ = (pX*pX)/particleCount;
		var pY = Math.random()*particleCount - particleCount/2;
		
		var particle = new THREE.Vector3( pX, pY, pZ );
		points_3d.coordinates.push({ "x": pX, "y": pY, "z": pZ });
		particles.vertices.push( particle );
	}
	
	particleSystem = new THREE.ParticleSystem( particles, pMaterial );
	
	scene.add(particleSystem);	
	particleSystem.sortParticles = true;
}

function parabola2(num) {
	var particleCount = num,
	    pMaterial = new THREE.ParticleBasicMaterial({ color: 0x5DF5B6, size: 5 }),
	    particles = new THREE.Geometry();
	
	//points_3d.coordinates.push({ "particleCount": particleCount });
	for(var p = 0; p < particleCount; p++) {
		var pX = Math.tan(Math.random()*particleCount - particleCount/2);
		var pY = Math.tan(Math.random()*particleCount - particleCount/2);
		var pZ = Math.random()*particleCount - particleCount/2;
		
		var particle = new THREE.Vector3( pX, pY, pZ );
		points_3d.coordinates.push({ "x": pX, "y": pY, "z": pZ });
		particles.vertices.push( particle );
	}
	
	particleSystem = new THREE.ParticleSystem( particles, pMaterial );
	
	scene.add(particleSystem);	
	particleSystem.sortParticles = true;
}

function hyperbola(num) {
	var particleCount = num,
	    pMaterial = new THREE.ParticleBasicMaterial({ color: 0x5DF5B6, size: 5 }),
	    particles = new THREE.Geometry();
	
	//points_3d.coordinates.push({ "particleCount": particleCount });
	for(var p = 0; p < particleCount; p++) {
		var pX = Math.random()*particleCount - particleCount/2;
		var pY = Math.random()*particleCount - particleCount/2;
		var pZ = (pX*pY)/particleCount;
		
		var particle = new THREE.Vector3( pX, pY, pZ );
		points_3d.coordinates.push({ "x": pX, "y": pY, "z": pZ });
		particles.vertices.push( particle );
	}
	
	particleSystem = new THREE.ParticleSystem( particles, pMaterial );
	
	scene.add(particleSystem);	
	particleSystem.sortParticles = true;
}

function scurve(num) {
	var particleCount = num,
	    pMaterial = new THREE.ParticleBasicMaterial({ color: 0x5DF5B6, size: 5 }),
	    particles = new THREE.Geometry();
	
	//points_3d.coordinates.push({ "particleCount": particleCount });
	for(var p = 0; p < particleCount; p++) {
		var pX = Math.random()*particleCount - particleCount/2;
		var pY = Math.random()*particleCount - particleCount/2;
		var pZ = Math.sqrt(pX*pX + pY*pY);
		
		var particle = new THREE.Vector3( pX, pY, pZ );
		points_3d.coordinates.push({ "x": pX, "y": pY, "z": pZ });
		particles.vertices.push( particle );
	}
	
	particleSystem = new THREE.ParticleSystem( particles, pMaterial );
	
	scene.add(particleSystem);	
	particleSystem.sortParticles = true;
}