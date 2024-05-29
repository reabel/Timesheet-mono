interface entryProps {
  createEntry: Function
}

//TODO: add submit using createEntry
export default function entry({ createEntry }: entryProps) {
    return (
      <main className="flex flex-col items-center justify-between">
          <h1 className="text-xl font-bold">Entry Form</h1>
          <div className="w-full max-w-prose">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                <textarea name="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <div className="mb-6">
                <label htmlFor="recurring" className="block text-gray-700 text-sm font-bold mb-2">Recurring?</label>
                <select name="recurring" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="allottedTime" className="block text-gray-700 text-sm font-bold mb-2">Estimate (Days):</label>
                <input name="allottedTime" type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="mb-6">
                <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
                <select name="status" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="Pending">Pending</option>
                  <option value="Started">Started</option>
                  <option value="Finished">Finished</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date:</label>
                <input name="date" type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="mb-6">
                <label htmlFor="start" className="block text-gray-700 text-sm font-bold mb-2">Start:</label>
                <input name="start" type="time" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="mb-6">
                <label htmlFor="end" className="block text-gray-700 text-sm font-bold mb-2">End:</label>
                <input name="end" type="time" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="mb-6">
                <label htmlFor="break" className="block text-gray-700 text-sm font-bold mb-2">Break:</label>
                <input name="break" type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="mb-6">
                <label htmlFor="project" className="block text-gray-700 text-sm font-bold mb-2">Project:</label>
                <input name="project" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="mb-6">
                <label htmlFor="user" className="block text-gray-700 text-sm font-bold mb-2">User:</label>
                <input name="user" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>

              <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
              </div>
            </form>
          </div>
      </main>
    );
  }
  