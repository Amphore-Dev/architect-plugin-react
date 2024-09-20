import { TArchitectPlugin } from "@amphore-dev/architect";

const ArchitectPlugin: TArchitectPlugin = {
    name: "architect-plugin-react",
    register(architect) {
        architect.registerBlueprints();
    },
    extensions: {
        react: "jsx",
        "react-typescript": "ts",
        "react-native": "jsx",
        "react-native-typescript": "ts",
    },
};

export default ArchitectPlugin;
