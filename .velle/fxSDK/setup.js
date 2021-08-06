
const PROJECT_NAME = readLocalConfig("project.name");

const output
      = true// exec("fxsdk new " + PROJECT_NAME)
      && appendToFile(".gitignore", ".velle/")
      && appendToFile("README.md", "# " + PROJECT_NAME);

if (output) {
    log("Setup Successful !");
} else {
    log("Issue while setting up.");
}
