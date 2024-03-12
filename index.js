window.onload = function() {
    var counters = document.querySelectorAll('.counter');
    var speed = 200; // The lower the slower

    counters.forEach(counter => {
        var updateCount = () => {
            var target = +counter.getAttribute('data-count');
            var count = +counter.innerText;

            // Lower inc to slow and higher to fast
            var inc = target / speed;

            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = (count + inc).toFixed(4);
                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                if (target < 1) {
                    counter.innerText = (target * 1000).toFixed(1) + 'K';
                } else {
                    counter.innerText = target.toFixed(1) + 'M';
                }
            }
        };

        updateCount();
    });
};

// modal scripts
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }}
