export default function dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Dashboard</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Select</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Recurring?</th>
              <th scope="col" className="px-6 py-3">Alotted Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <input type="checkbox"></input>
              </th>
              <td className="px-6 py-4">
                Something to do
              </td>
              <td className="px-6 py-4">
                Yes
              </td>
              <td className="px-6 py-4">
                1d
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
