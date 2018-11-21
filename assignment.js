// Tabbed navigation functionality
const openCategory = (animalCategory) => {
    let i;
    const categories = document.getElementsByClassName("animalCategory");
    for (i = 0; i < categories.length; i++) {
       categories[i].style.display = "none";  
    }
    document.getElementById(animalCategory).style.display = "block";  
}

// Mapping all the reptile data through a loop
animals_data.category[0].animals.forEach(function(reptile){
    
    const reptileImage1 = document.createElement('img');
    reptileImage1.src = reptile.image1; 
    
    const reptileImage2 = document.createElement('img');
    reptileImage2.src = reptile.image2; 
    
    const reptile_name = document.createElement('h1');
    reptile_name.innerHTML = reptile.name; 

    const reptile_description = document.createElement('p');
    reptile_description.innerHTML = reptile.description; 

    document.getElementById('Reptiles').appendChild(reptileImage1);
    document.getElementById('Reptiles').appendChild(reptileImage2);
    document.getElementById('Reptiles').appendChild(reptile_name);
    document.getElementById('Reptiles').appendChild(reptile_description);
}); 


// Mapping all the mammals data through a loop
animals_data.category[1].animals.forEach(function(mammals){
    
    const mammalsImage1 = document.createElement('img');
    mammalsImage1.src = mammals.image1; 
    
    const mammalsImage2 = document.createElement('img');
    mammalsImage2.src = mammals.image2; 
    
    const mammals_name = document.createElement('h1');
    mammals_name.innerHTML = mammals.name; 

    const mammals_description = document.createElement('p');
    mammals_description.innerHTML = mammals.description; 

    document.getElementById('Mammals').appendChild(mammalsImage1);
    document.getElementById('Mammals').appendChild(mammalsImage2);
    document.getElementById('Mammals').appendChild(mammals_name);
    document.getElementById('Mammals').appendChild(mammals_description);
}); 


// Mapping all the birds data through a loop
animals_data.category[2].animals.forEach(function(birds){
    
    const birdsImage1 = document.createElement('img');
    birdsImage1.src = birds.image1; 
    
    const birdsImage2 = document.createElement('img');
    birdsImage2.src = birds.image2; 
    
    const birds_name = document.createElement('h1');
    birds_name.innerHTML = birds.name; 

    const birds_description = document.createElement('p');
    birds_description.innerHTML = birds.description; 

    document.getElementById('Birds').appendChild(birdsImage1);
    document.getElementById('Birds').appendChild(birdsImage2);
    document.getElementById('Birds').appendChild(birds_name);
    document.getElementById('Birds').appendChild(birds_description);
}); 