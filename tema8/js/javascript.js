async function getphoto() {
    var dropdown = document.getElementById('dropdown');
    var image = document.getElementById('image');
    if(dropdown.value == "dog_photo")
    {
        const response = await fetch('https://random.dog/woof.json');
        const todo = await response.json();
        var url1 = todo.url;
        image.src = url1;
    }
    
    else
    if(dropdown.value == "cat_photo")
    {
        const response = await fetch('https://aws.random.cat/meow');
        const todo = await response.json();
        var url1 = todo.src;
        image.src = url1;
    }
    else
    if(dropdown.value == "fox_photo")
    {
        const response = await fetch('https://randomfox.ca/floof/');
        const todo = await response.json();
        var url1 = todo.image;
        image.src = url1;
    }

}


