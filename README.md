# JavaScript Carousel

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
