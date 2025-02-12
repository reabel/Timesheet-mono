import TSAPIConnection from "./TSAPIConnection";
import { connectionStatus } from "../utils/types";

const TSHeader = () => {
    return (
        <header className="flex items-center bg-gray-800 p-1">
            <a href="/" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4">Home :D</a>
            <a href="/dashboard" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4">Dashboard</a>
            <a href="/entry" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 ">Add Entry</a>
            <a href="/admin" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4">Admin</a>
            <div className="absolute right-0 ">
                <div className="flex items-center justify-between">
                    <button className="flex items-center justify-between px-4 py-2 text-white bg-blue-500">
                        <TSAPIConnection connstatus={connectionStatus.DISCONNECTED}></TSAPIConnection>
                        Refresh
                    </button>
                    <a href="/next" className="px-4 py-2 text-white bg-red-500 mx-5">
                        Built in Next.js
                    </a>
                </div>
            </div>
            <div>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
            </div>
        </header>
    );
};
export default TSHeader;