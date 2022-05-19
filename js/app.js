
// BaguetteBox plugin installed
baguetteBox.run('.gallery');


// Search filter starts here
const search = searchFilter();

function searchFilter() {
  let input = document.getElementById('search').value;
  input = input.toUpperCase();
  let image = document.querySelectorAll('a');
    for (let i = 0; i < image.length; i++) {
      if (!image[i].getAttribute('data-caption').toUpperCase().includes(input)) {
				// image[i].style.display = "none";
				image[i].style.opacity = "0";
      } else {
				image[i].style.display = "flex";
				image[i].style.opacity = "1";
				image[i].style.transition = "all .5s ease";
			}
  	}
}
