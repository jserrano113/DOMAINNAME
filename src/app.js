/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let domainName = [];
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "raccon"];
  let domain = [".com", ".net", ".gov", ".us"];

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < domain.length; d++) {
          domainName.push("  " + pronoun[a] + adj[b] + noun[c] + domain[d]);
        }
      }
    }
  }
  console.log(domainName);
  document.getElementById("domain.results").innerHTML = domainName;
};
