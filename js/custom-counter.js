<script>
  document.addEventListener("DOMContentLoaded", function () {
    const animateCounter = (elementId, stopAt) => {
      const el = document.getElementById(elementId);
      let count = 1;
      const stepTime = 100;
      const interval = setInterval(() => {
        if (count < stopAt) {
          el.innerText = count;
          count++;
        } else {
          clearInterval(interval);
          el.innerText = stopAt + "+";
        }
      }, stepTime);
    };

    animateCounter("projectsCounter", 12);
    animateCounter("toolsCounter", 30);
    animateCounter("clientsCounter", 6);
  });
</script>
