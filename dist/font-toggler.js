class FontToggler extends HTMLElement {
  constructor() {
    super();

    this.every_s = 10;
    this.stylesheet = "fonts.css";
  }
  connectedCallback() {
    if (this.hasAttribute("every_s"))
      this.every_s = this.getAttribute("every_s");
    if (this.hasAttribute("stylesheet"))
      this.stylesheet = this.getAttribute("stylesheet");

    this.render();
  }
  render() {
    let stylesheets = document.styleSheets;
    let rules;
    for (let i = 0; i < stylesheets.length; i++) {
      let stylesheet = stylesheets[i];
      if (stylesheet.href && stylesheet.href.includes(this.stylesheet)) {
        rules = stylesheet.cssRules;
      }
    }
    // loop over CSSStyleRules and collect selectorText
    let selectors = [];
    for (let i = 0; i < rules.length; i++) {
      let rule = rules[i];
      if (rule instanceof CSSStyleRule) {
        // remove leading dot
        let selector = rule.selectorText.slice(1);
        selectors.push(selector);
      }
    }
    this.interval = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * selectors.length);
      // remove final class and add new class
      this.classList = "";
      this.classList.add(selectors[randomIndex]);
    }, this.every_s * 1000);
  }
  disconnectedCallback() {
    clearInterval(this.interval);
  }
}

customElements.define("font-toggler", FontToggler);
