export const Rooms = (props) => {
  const { homeId } = props;

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">Rooms - home {homeId}</h1>
      <p className="text-gray-600">Manage your rooms here.</p>
      <div className="flex justify-end">
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Add Room
        </button>
      </div>
      {/* Room list will go here */}
    </div>
  );
};
