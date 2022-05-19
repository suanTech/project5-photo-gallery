
// BaguetteBox plugin installed
baguetteBox.run('.gallery');


// Search filter starts here
const anchor = document.getElementsByTagName('a'); // to retrieve data attribute for caption
const search = searchFilter();


function searchFilter() {
    // set variables 
    let caption, filter, input, image;

    // retrieve elements/values from html
    input = document.getElementById('search'); // search input by user
    filter = input.value.toUpperCase();
    image = document.getElementsByTagName('img'); // to change display value


    // check if the input matches data-caption
    for (let i = 0; i < image.length; i++) {
        caption =  anchor[i].getAttribute('data-caption');
        if(caption) {
            matchingWord = caption || input;
            if (matchingWord.toUpperCase().indexOf(filter) > -1) {
                image[i].style.display = "";
                image[i].style.opacity = 1;
                image[i].style.transition = "all .5s ease";
            } else {
                image[i].style.opacity = 0;
            }
        }
    }
}
    
/* 
/  function was created referring to https://www.w3schools.com/howto/howto_js_filter_table.asp
*/