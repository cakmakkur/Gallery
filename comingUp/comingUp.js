// document.addEventListener('DOMContentLoaded', function() {
//   var textElement = document.querySelector('.textAnm');
//   var textContent = textElement.textContent;

//   textElement.textContent = '';

//   for (let i = 0; i < textContent.length; i++) {
//     setTimeout(function(index) {
//       return function() {
//         textElement.textContent += textContent[index];
//       };
//     }(i), i * 40);
//   }
// });