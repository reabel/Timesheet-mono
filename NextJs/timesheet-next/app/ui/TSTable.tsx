import { entry } from "../utils/types";

interface TableProps {
    rows: Array<entry>;
};

const TSTable = ({rows = [] }: TableProps) => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th scope="col" className="px-6 py-3">Select</th>
                    <th scope="col" className="px-6 py-3">Description</th>
                    <th scope="col" className="px-6 py-3">Status</th>
                    <th scope="col" className="px-6 py-3">Recurring?</th>
                    <th scope="col" className="px-6 py-3">Budget</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row: entry, index: number) => {
                        return (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <input type="checkbox"></input>
                            </th>
                            <td className="px-6 py-4">{row.description}</td>
                            <td className="px-6 py-4">{row.status || "N/A"}</td>
                            <td className="px-6 py-4">{row.recurring ? "Yes": "No"}</td>
                            <td className="px-6 py-4">{row.spentTime} / {row.allottedTime} Days</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TSTable;