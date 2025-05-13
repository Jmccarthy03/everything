
  // This detects iOS standalone mode
  if (('standalone' in window.navigator) && window.navigator.standalone) {
    document.addEventListener('click', function(event) {
      let target = event.target.closest('a');
      if (target && target.href && target.host === location.host) {
        event.preventDefault();
        window.location = target.href;
      }
    }, false);
  }

