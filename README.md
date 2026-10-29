# JavaScript Carousel

[![live demo](https://img.shields.io/website?url=http%3A%2F%2Fzkm.github.io%2Fdynamic-carousel%2F&label=live%20demo)](http://zkm.github.io/dynamic-carousel/)

![JavaScript vanilla](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-663399?logo=css&logoColor=white)

This is a simple JavaScript carousel that allows you to slide through a series of images.

To use it, include the following HTML in your page:


```html
<div id="sliderWrap">
  <div id="slider">
    <ul class="slides">
      <!-- Add your images here -->     
    </ul>
  </div>
  <div id="sliderControls">
    <a href="#" id="sliderPrev">previous</a>
    <a href="#" id="sliderNext">next</a>
  </div> 
</div>
```

Then, include the following CSS/JavaScript in your page:

```html
<link rel="stylesheet" href="css/style.css">
<script src="js/jquery.js"></script>
<script src="js/carousel.js"></script>
```

That's it! The carousel will automatically initialize itself when the page is loaded, and you'll be able to slide through your images using the "previous" and "next" buttons.
