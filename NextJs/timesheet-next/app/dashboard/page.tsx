import TSTable from "../ui/TSTable";

export default function dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Dashboard</h1>
      <div className="relative overflow-x-auto">
        <TSTable/>
      </div>
    </main>
  );
}
