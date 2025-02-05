import transferToken from "./actions/transfer";
import { walletProvider } from "./providers/wallet";


export const aptosPlugin = {
    name: "aptos",
    description: "Aptos Plugin for Eliza",
    actions: [transferToken],
    evaluators: [],
    providers: [walletProvider],
};

export default aptosPlugin;
