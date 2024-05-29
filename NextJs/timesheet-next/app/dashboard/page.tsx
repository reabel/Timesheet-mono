import TSTable from "../ui/TSTable";
import { entry, status } from "../utils/types";

export default function dashboard() {
  const rows: Array<entry> = [
    {
      id: 1,
      description: "Something to do",
      status: status.PENDING,
      recurring: true,
      allottedTime: 1,
      spentTime: 0.5,
    },
    {
      id: 1,
      description: "Another thing to do",
      recurring: true,
      allottedTime: 1,
      spentTime: 0.5,
    },
    {
      id: 1,
      description: "Another thing to do",
      recurring: true,
      allottedTime: 1,
      spentTime: 0.5,
    },
    {
      id: 1,
      description: "Another thing to do",
      recurring: true,
      allottedTime: 1,
      spentTime: 0.5,
    },
    {
      id: 1,
      description: "Another thing to do",
      recurring: true,
      allottedTime: 1,
      spentTime: 0.5,
    },
    {
      id: 1,
      description: "Another thing to do",
      recurring: true,
      allottedTime: 1,
      spentTime: 0.5,
    },
    {
      id: 1,
      description: "Another thing to do",
      recurring: true,
      allottedTime: 1,
      spentTime: 0.5,
    },
    {
      id: 1,
      description: "Another thing to do",
      recurring: true,
      allottedTime: 1,
      spentTime: 0.5,
    },
    {
      id: 1,
      description: "Another thing to do",
      recurring: false,
      allottedTime: 1,
      spentTime: 0.5,
    },
    {
      id: 1,
      description: "Another thing to do",
      recurring: false,
      allottedTime: 1,
      spentTime: 0.5,
    },
    {
      id: 1,
      description: "Another thing to do",
      recurring: false,
      allottedTime: 1,
      spentTime: 0.5,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Dashboard</h1>
      <div className="relative overflow-x-auto">
        <TSTable rows={rows}></TSTable>
      </div>
    </main>
  );
}
