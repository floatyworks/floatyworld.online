function toggleIframe() {
  var iframe = document.getElementById('weatherIframe');
  if (iframe.style.display === 'none' || iframe.style.display === '') {
    iframe.style.display = 'block';
  } else {
    iframe.style.display = 'none';
  }
}

function prox() {
  var newWindow = window.open("https://www.ymovieshd.com", "_blank");
}
