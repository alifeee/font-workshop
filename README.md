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
