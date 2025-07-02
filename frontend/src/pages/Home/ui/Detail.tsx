import { Link } from 'react-router-dom';
import { useHomeFeature } from '@pages/Home/model/Home.ts';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Rooms } from '@pages/Home/ui/Rooms.tsx';

export const Detail = () => {
  const { home, getHomeDetail } = useHomeFeature();
  const { id } = useParams();
  const homeId = id ? parseInt(id, 10) : 0;

  useEffect(() => {
    getHomeDetail(homeId);
  }, []);

  return (
    <div>
      <h1 className="mb-4 text-lg font-semibold text-black">{home?.name}</h1>
      <p>{home?.address}</p>
      <Rooms homeId={homeId} />
      <div className="w-full space-y-6">
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
