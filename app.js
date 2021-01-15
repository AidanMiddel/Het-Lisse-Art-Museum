// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();



// create a model
const cuberoom = new Model('assets/models/cube-room/cube-room.gltf');
cuberoom.setPosition(0, 0, 0);
cuberoom.setScale(-.5, 0.5, 0.5);
cuberoom.setRotation(-0.76, -36.95, 0);


// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('red');
sphere.setRadius(0.3);
sphere.setPosition(0, 1, -2);

// create some text
const lamText = new Text('Lisser Art Museum');
lamText.setPosition(-0.9, 2.2, -2.1);
lamText.setFontsize(12);
lamText.setScale(0.5, 0.5, 0.5)
lamText.setRotation(0, -13, 0);

// create some text
const lamText1 = new Text('Click me');
lamText1.setPosition(-0.5, 1.6, -2.1);
lamText1.setFontsize(12);
lamText1.setScale(0.5, 0.5, 0.5)
lamText1.setRotation(0, -11, 0);

// create an image
const image1 = new XRImage('assets/images/FolkertdeJong1.jpg');
image1.setPosition(-1.55, 1.9, -1.4);
image1.setRotation(0, 53, 0);
image1.setScale(2, 2, 2);

// create an imageí
const image2 = new XRImage('assets/images/FolkertdeJong2.jpg');
image2.setPosition(2, 1.9, -1.05);
image2.setRotation(0, -37, 0);
image2.setScale(1.8, 1.8, 1.8);

// create an imageí
const image3 = new XRImage('assets/images/FolkertdeJong3.jpg');
image3.setPosition(2.1, 1.9, 0.7);
image3.setRotation(0, -127, 0);
image3.setScale(1.5, 1.5, 1.5);

// create an imageí
const image4 = new XRImage('assets/images/FolkertdeJong4.jpg');
image4.setPosition(1.1, 1.9, 2.1);
image4.setRotation(0, -127, 0);
image4.setScale(1.5, 1.5, 1.5);

// create an imageí
const image5 = new XRImage('assets/images/FolkertdeJong5.jpg');
image5.setPosition(-1.3, 1.9, 1.3);
image5.setRotation(0, -220, 0);
image5.setScale(2, 2, 2);


// create a 360 image
const image360 = new Sky('assets/LamIngang.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-0.2, 2, 3.7);

// listen for an event
image1.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Kunstwerk van kunstenaar Folkert de Jong.");
image1.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");
image2.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Kunstwerk van kunstenaar Folkert de Jong.");
image2.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");
image3.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Kunstwerk ‘Monument voor een Salimbanque’ van kunstenaar Folkert de Jong.");
image3.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");
image4.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Kunstwerk ‘Queen Mary’ van kunstenaar Folkert de Jong.");
image4.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");
image5.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Kunstwerk ‘The Shooting Lesson’ van kunstenaar Folkert de Jong.");
image5.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");
sphere.addEventListener('click', () => 
    document.getElementById('extraText').innerHTML= "In dit webXR ruimte kan je het kunst zien van Folkert de Jong. Klik en sleep met de muis om door de ruimte te bewegen. Gebruik WASD om rond te bewegen ");
sphere.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");