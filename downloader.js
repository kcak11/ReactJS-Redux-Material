var links = document.querySelectorAll('a[href*=".ppt"]');
for (var i = 0; i < links.length; i++) {
  (function (p) {
    setTimeout(function () {
      p.setAttribute('href', p.href + '?raw=true');
      p.setAttribute('target', '_blank');
      p.click();
    }, i * 2000);
  }(links[i]));
}
