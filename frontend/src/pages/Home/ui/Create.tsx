import { Link } from 'react-router-dom';
import { Input } from '@widgets/form/ui/Input.tsx';
import { useHomeFeature } from '@pages/Home/model/Home.ts';

export const Create = () => {
  const { formData, loading, handleChange, handleCreate } = useHomeFeature();

  return (
    <div>
      <h1 className="mb-4 text-lg font-semibold text-black">Create New Home</h1>

      <div className="w-full space-y-6">
        <form
          onSubmit={handleCreate}
          className="space-y-6 rounded-xl bg-white p-6 shadow-md"
        >
          <Input
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            placeholder="Home's name"
            onChange={handleChange}
            disabled={loading}
            error=""
          />

          <Input
            label="Short Name"
            type="text"
            name="shortName"
            value={formData.shortName}
            placeholder="Home's short name"
            onChange={handleChange}
            disabled={loading}
            error=""
          />

          <Input
            label="Addess"
            type="text"
            name="address"
            value={formData.address}
            placeholder="Home's description"
            onChange={handleChange}
            disabled={loading}
            error=""
          />

          <button
            type="submit"
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          >
            Create Home
          </button>
        </form>

        <div className="flex justify-between px-2 text-sm text-gray-600">
          <Link
            to="/home"
            className="font-medium text-indigo-600 hover:underline"
          >
            Back to list
          </Link>
        </div>
      </div>
    </div>
  );
};
