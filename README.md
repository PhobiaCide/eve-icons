# Eve Online UI Icons

A collection of SVG Icons from the Eve Online user Interface.

## Table Of Contents

### Summary

#### Steps Taken

1. Converted from .PNG to inline .SVG code
2. Optimized using Nano
3. Removed all data URLs by hand
4. Replaced each one with `<rect></rect>`s
5. Applied a gradient and a stroke through the `.shape` class

#### Key Points

- Significantly reduced in size.
- Ready for use directly as inline html
- Can be _any colour you like_
- Look awesome at any scale

### Demo

Check out the [Icon Showcase](https://phobiacide.github.io/eve-icons/)!

### Code

#### Outline

##### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!--

      <meta>

        Meta Data

      </meta>

    -->
    <!--

		A couple Google Fonts that are used on the page

    -->
    <!--

      Stylesheet
      See below for further reading...

    -->
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!--

      <header>

        Code for the header, Title and dark/light toggle
        See below for further reading...

      </header>

    -->
    <!--
      <ul>

        Just a few bullet points for the purpose of presentation...

      </ul>
    -->
    <!--

      <main>
        <div class="container">
  
            References to the SVG Icon Definitions
            See below for further reading...
  
        </div>
      </main>

    -->
    <!--

      <footer>
        <ul>

          Footer Details

        </ul>
      </footer>

    -->
    <!--

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="0"
        height="0"
      >
        <defs>
          
            SVG Icon Definitions
            See Below for further reading
  
        </defs>
      </svg>
		
    -->
    <!--

      <svg width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>

          SVG gradient defs
          See below for further reading...
 
        </defs>
      </svg>

    -->
    <!-- 

      Main JavaScript
      See below for further reading...

    -->
    <script src="script.js"></script>
  </body>
</html>
```

#### Page Header

```html
<table>
  <tr>
    <td>
      <h1>Vectorized Eve Online Icons</h1>
    </td>
    <td>
      <button id="dark-light-toggle" onclick="darkMode()">
        <span class="button-shadow"></span>
        <span class="button-edge"></span>
        <span class="button-front">dark</span>
      </button>
    </td>
  </tr>
</table>
```

#### SVG Icon References

Basically, there is a grid of url references to the .SVG definitions

##### Icon Reference Example

```html
<div>
  <svg class="icon" viewBox="0 0 128 128">
    <use xlink:href=""></use>
  </svg>
</div>
```

#### SVG Icon Definitions

##### Preface

There are some quantity of SVG Icon Definitions in the code.

Each `<symbol></symbol` is made up of one or more of the following elements:

| Name          | Tag                     | Description |
| ------------- | ----------------------- | ----------- |
| **Group**     | `<g></g>`               |             |
| **Clip Path** | `<clipPath></clipPath>` |             |
| **Path**      | `<path></path>`         |             |
| **Rectangle** | `<rect></rect>`         |             |

##### Icon Definition Example

```html
<symbol id="Example">
  <g>
    <clipPath id="Example-A">
      <path d="" />
    </clipPath>
    <g opacity="" clip-path="url(#Example-A)">
      <clipPath id="Example-B">
        <path d="" />
      </clipPath>
      <rect x="" y="" width="" height="" class="shape" />
    </g>
  </g>
</symbol>
```

#### SVG Gradient Definitions

There are some quantity of SVG Gradient Definitions in the code.
