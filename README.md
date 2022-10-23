# Read more toggler ..

A simple pure javascript package to truncate paragraphs and add functionality to expand with read more and read less.
Just add  `class="read-more"` in your p element.

use from cdn 
https://unpkg.com/read-more-toggler@1.1.0/main.js

```bash
npm i read-more-toggler
```

```html
<p class="read-more">YOUR LONG PARA</p>

<script type="module">
  import { readMoreToggler } from "./main.js";
  readMoreToggler({
    charLimit: 250, // default is 100
    expandText: "show more", // default is 'Read more'
    collapseText: "collapse", // default is 'Show less'
  });
</script>
```
