import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/moon.css";
import "highlight.js/styles/night-owl.css";
import "./style.css";
import Reveal from "reveal.js";
import "highlight.js";
import highlightJavaScript from "highlight.js/lib/languages/javascript";
import highlightTypeScript from "highlight.js/lib/languages/typescript";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import RevealNotes from "reveal.js/plugin/notes/notes";

const deck = new Reveal({
  plugins: [RevealHighlight, RevealNotes],
  highlight: {
    highlightOnLoad: false,
    beforeHighlight: (hljs) => {
      hljs.registerLanguage("javascript", highlightJavaScript);
      hljs.registerLanguage("typescript", highlightTypeScript);
    },
  },
});
deck.initialize({ hash: true, slideNumber: true });

const highlight = deck.getPlugin("highlight") as any;
for (const code of document.querySelectorAll(
  '.reveal code[class^="language-"]',
)) {
  highlight.highlightBlock(code);
}
