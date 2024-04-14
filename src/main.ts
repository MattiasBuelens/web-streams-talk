import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/moon.css";
import "highlight.js/styles/night-owl.css";
import "./style.css";
import Reveal from "reveal.js";
import "highlight.js";
import highlightJavascript from "highlight.js/lib/languages/javascript";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import RevealNotes from "reveal.js/plugin/notes/notes";

const deck = new Reveal({
  plugins: [RevealHighlight, RevealNotes],
  highlight: {
    beforeHighlight: (hljs) =>
      hljs.registerLanguage("javascript", highlightJavascript),
  },
});
deck.initialize({ hash: true, slideNumber: true });
