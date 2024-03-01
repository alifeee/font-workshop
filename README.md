# Font Workshop

Presentation for a font-making workshop using [reveal.js](https://revealjs.com/).

## Convert `TTF` to `WOFF` font

```bash
sudo apt-get install woff-tools
sfnt2woff font.ttf
```

### In bulk

```bash
find . -name "*.ttf" -exec sfnt2woff {} \;
```

## Create `CSS` from `WOFF` files

```bash
find . -name "*.woff" -exec ./filename_to_css.sh {} \;
```

## Make presentation into a PDF

See <https://revealjs.com/pdf-export/>
