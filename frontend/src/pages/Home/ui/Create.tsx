import { Link } from 'react-router-dom';

export const Create = () => {
  return (
    <div>
      <h1>Create</h1>

      <div className="flex justify-start">
        <button className="d-inline-block rounded-lg bg-blue-500 px-4 py-2 text-white">
          <Link to="/home">Back to list</Link>
        </button>
      </div>
    </div>
  );
};
