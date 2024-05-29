import { project } from "../utils/types";

interface TableProps {
    rows: Array<project>;
};

const TSProjectTable = ({rows = [] }: TableProps) => {
    return (
        <div className="flex flex-col items-center justify-between relative overflow-x-auto ">
            <table className="w-full max-w-prose text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3">Description</th>
                    <th scope="col" className="px-6 py-3">Users</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row: project) => {
                        return (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">{row.name}</td>
                            <td className="px-6 py-4">{row.description}</td>
                            <td className="px-6 py-4">{row.users.map(user => user.username).join(', ')}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TSProjectTable;