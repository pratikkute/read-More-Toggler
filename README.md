# Read more toggler ..

A simple pure javascript package to trunket paragraphs and add functionality to expand with read more and read less.
Just add  `class="read-more"` in your p element.

```bash
npm install read-more-toggler
```

```html
<p class="read-more">YOUR LONG PARA</p>

<script type="text/javascript">
  readMoreToggler({
    charLimit: 250, // default is 100
    expandText: "show more", // default is 'Read more'
    userCollapseText: "collapse", // default is 'Show less'
  });
</script>
```

## use a module

```html
<script type="module">
  import { readMoreToggler } from "./main.js";
  readMoreToggler({
    charLimit: 250, // default is 100
    expandText: "show more", // default is 'Read more'
    userCollapseText: "collapse", // default is 'Show less'
  });
</script>
```
