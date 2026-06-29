// GSAP-powered subtle motion with graceful fallback
(function () {
  function ready(fn){ if(document.readyState !== 'loading'){ fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }

  ready(function(){
    if (window.gsap) {
      gsap.from('.hero h1', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.hero-sub', { y: 16, opacity: 0, duration: 0.8, delay: 0.1 });
      gsap.from('.media-frame', { y: 24, opacity: 0, duration: 1, delay: 0.2 });
    }

    // simple hover lift fallback
    document.querySelectorAll('.btn').forEach(function(btn){
      btn.addEventListener('mouseenter', function(){ btn.style.transform = 'translateY(-2px)'; });
      btn.addEventListener('mouseleave', function(){ btn.style.transform = 'translateY(0)'; });
    });
  });
})();