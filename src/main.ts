import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/dracula.css";
import "./style.css";
import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes/notes";

const deck = new Reveal({
  plugins: [RevealNotes],
});
deck.initialize({ hash: true, slideNumber: true });
