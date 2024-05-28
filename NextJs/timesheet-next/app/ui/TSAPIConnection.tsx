import { connectionStatus } from "../utils/types";

interface TACProps {
    connstatus: connectionStatus;
};

const TSAPIConnection = ({connstatus = connectionStatus.DISCONNECTED }: TACProps) => {
    let colour;
    switch (connstatus) {
        case connectionStatus.CONNECTED:
            colour = "bg-green-500";
        case connectionStatus.PENDING:
            colour = "bg-yellow-500";
        default:
            colour = "bg-red-500";
        
    }
    return (
        <div className={`w-4 h-4 rounded-full ${colour}`} title={connstatus}></div>
    );
};

export default TSAPIConnection;