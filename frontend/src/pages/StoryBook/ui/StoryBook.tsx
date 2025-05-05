export const StoryBook = () => {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200 rounded-xl border shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Status
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          <tr>
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
              Alice
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
              Developer
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-sm">
              <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold text-green-800">
                Active
              </span>
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-indigo-600">
              <a href="#" className="hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
              Bob
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
              Designer
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-sm">
              <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold text-yellow-800">
                Pending
              </span>
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-indigo-600">
              <a href="#" className="hover:underline">
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
