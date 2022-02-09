const fs = require("fs");

const tailwindFilePath = "./dist/tailwind.css";

fs.readFile(tailwindFilePath, (readError, data) => {
  if (readError) {
    console.error(readError);
  }

  const css = data.toString();
  const reg = /\*,[\d\D]*?\}/g;

  const minifyCSS = css.replace(reg, "").replace(/ /g, "").replace(/\n/g, "");

  fs.writeFile(
    "./dist/tailwind.min.wxss",
    minifyCSS,
    { flag: "w+" },
    (writeError) => {
      if (writeError) {
        console.error(writeError);
      }
    }
  );
});
