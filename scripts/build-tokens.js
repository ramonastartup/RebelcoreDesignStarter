import StyleDictionary from "style-dictionary";

StyleDictionary.registerTransform({
  name: "rc/duration",
  type: "value",
  filter: (token) => token.$type === "duration",
  transform: (token) => `${token.$value.value}${token.$value.unit}`
});

const sd = new StyleDictionary({
  source: ["src/tokens/tokens.json"],
  platforms: {
    css: {
      transformGroup: "css",
      transforms: ["rc/duration"],
      buildPath: "src/tokens/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables"
        }
      ]
    }
  }
});

await sd.hasInitialized;
await sd.buildAllPlatforms();