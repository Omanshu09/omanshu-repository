
(function () {
  const COMMON_FACTS = {
    "capital of india": "New Delhi.",
    "capital of china": "Beijing.",
    "capital of japan": "Tokyo.",
    "capital of france": "Paris.",
    "capital of germany": "Berlin.",
    "capital of russia": "Moscow.",
    "capital of australia": "Canberra.",
    "capital of canada": "Ottawa.",
    "capital of the united states": "Washington, D.C.",
    "capital of usa": "Washington, D.C.",
    "capital of united kingdom": "London.",
    "capital of the uk": "London."
  };

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[?!.,;:]+$/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function calculate(question) {
    let expr = normalize(question)
      .replace(/^what is\s+/, "")
      .replace(/^calculate\s+/, "")
      .replace(/equals?\s*$/, "")
      .trim();

    if (!/^[0-9+\-*/().% \t]+$/.test(expr)) return null;

    try {
      const result = Function('"use strict"; return (' + expr + ')')();
      if (typeof result !== "number" || !Number.isFinite(result)) return null;
      return Number.isInteger(result) ? String(result) : String(Number(result.toFixed(10)));
    } catch {
      return null;
    }
  }

  async function wikipedia(question) {
    try {
      const searchUrl =
        "https://en.wikipedia.org/w/api.php" +
        "?action=query" +
        "&list=search" +
        "&srsearch=" + encodeURIComponent(question) +
        "&format=json" +
        "&origin=*" +
        "&utf8=1" +
        "&srlimit=3";

      const response = await fetch(searchUrl);
      if (!response.ok) return null;

      const data = await response.json();
      const results = data?.query?.search || [];
      if (!results.length) return null;

      const title = results[0].title;

      const summaryUrl =
        "https://en.wikipedia.org/api/rest_v1/page/summary/" +
        encodeURIComponent(title.replace(/ /g, "_"));

      const summaryResponse = await fetch(summaryUrl);
      if (!summaryResponse.ok) return null;

      const summary = await summaryResponse.json();
      if (!summary.extract) return null;

      return {
        answer: summary.extract,
        source: "Wikipedia",
        url: summary.content_urls?.desktop?.page || null
      };
    } catch (error) {
      console.warn("Web connector unavailable:", error);
      return null;
    }
  }

  window.webConnector = {
    async ask(question) {
      const original = String(question || "").trim();
      const q = normalize(original);

      if (!q) return null;

      const math = calculate(original);
      if (math !== null) {
        return { answer: math, source: "calculator" };
      }

      if (COMMON_FACTS[q]) {
        return { answer: COMMON_FACTS[q], source: "local facts" };
      }

      return await wikipedia(original);
    }
  };
})();
