import TSTable from "../ui/TSTable";

export default function dashboard() {
  const rows = [
    {
      description: "Something to do",
      recurring: "Yes",
      alottedTime: "1d",
    },
    {
      description: "Another thing to do",
      recurring: "No",
      alottedTime: "2d",
    },
    {
      description: "Another thing to do",
      recurring: "No",
      alottedTime: "2d",
    },
    {
      description: "Another thing to do",
      recurring: "No",
      alottedTime: "2d",
    },
    {
      description: "Another thing to do",
      recurring: "No",
      alottedTime: "2d",
    },
    {
      description: "Another thing to do",
      recurring: "No",
      alottedTime: "2d",
    },
    {
      description: "Another thing to do",
      recurring: "No",
      alottedTime: "2d",
    },
    {
      description: "Another thing to do",
      recurring: "No",
      alottedTime: "2d",
    },
    {
      description: "Another thing to do",
      recurring: "No",
      alottedTime: "2d",
    },
    {
      description: "Another thing to do",
      recurring: "No",
      alottedTime: "2d",
    },
    {
      description: "Another thing to do",
      recurring: "No",
      alottedTime: "2d",
    },
  ];

  const tableRows = rows.map((row) => (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <input type="checkbox"></input>
      </th>
      <td className="px-6 py-4">{row.description}</td>
      <td className="px-6 py-4">{row.recurring}</td>
      <td className="px-6 py-4">{row.alottedTime}</td>
    </tr>
  ));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Dashboard</h1>
      <div className="relative overflow-x-auto">
        <TSTable rows={rows}></TSTable>
      </div>
    </main>
  );
}
