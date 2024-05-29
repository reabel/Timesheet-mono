
import { user } from "../utils/types";

interface TableProps {
    rows: Array<user>;
};

// TODO: Figure out if we can have a base component that this is etending from
const TSUserTable = ({rows = [] }: TableProps) => {
    return (
        <div className="flex flex-col items-center justify-between relative overflow-x-auto">
            <table className="w-full max-w-prose text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3">Email</th>
                    <th scope="col" className="px-6 py-3">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row: user) => {
                        return (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">{row.username}</td>
                            <td className="px-6 py-4">{row.email}</td>
                            <td className="px-6 py-4">{row.role}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TSUserTable;