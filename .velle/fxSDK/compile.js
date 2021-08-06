
const EXECUTABLE_NAME = readLocalConfig("project.name") + ".g3a";

exec("fxsdk build-cg && fxlink -w -s " + EXECUTABLE_NAME)
    ? log("Successful build !")
    : log("Couldn't build...");
