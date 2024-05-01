// JavaScript code for hover effect
document.addEventListener("DOMContentLoaded", function() {
  const elementsToHover = document.querySelectorAll('.hover-effect'); // Select all elements with the class 'hover-effect'
  
  // Loop through each element and add event listeners for mouseenter and mouseleave
  elementsToHover.forEach(function(element) {
    element.addEventListener('mouseenter', function() {
      // Change the background color of the element when hovered over
      this.style.backgroundColor = '#007bff'; 
    });
    element.addEventListener('mouseleave', function() {
      this.style.backgroundColor = 'transparent';
    });
  });
});
