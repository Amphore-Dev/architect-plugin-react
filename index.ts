const ArchitectPlugin = {
    name: "architect-plugin-react",
    register(architect) {
        architect.registerBlueprints();
    },
    extensions: {
        react: "js",
        "react-typescript": "ts",
        "react-native": "js",
        "react-native-typescript": "ts",
    },
};

export default ArchitectPlugin;
