import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHomeFeature } from '../model/Home';

export const Home = () => {
  const { homes, getHomes, searchHome, changeSearchHome } = useHomeFeature();

  useEffect(() => {
    getHomes();
  }, []);

  return (
    <div>
      <div className="py-3">
        <label className="flex h-12 w-full min-w-40 flex-col">
          <div className="flex h-full w-full flex-1 items-stretch rounded-lg">
            <div
              className="flex items-center justify-center rounded-l-lg border-r-0 border-none bg-[#e7eef3] pl-4 text-[#4e7a97]"
              data-icon="MagnifyingGlass"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input
              placeholder="Search for a resort"
              className="form-input flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none border-l-0 border-none bg-[#e7eef3] px-4 pl-2 text-base font-normal leading-normal text-[#0e161b] placeholder:text-[#4e7a97] focus:border-none focus:outline-0 focus:ring-0"
              value={searchHome}
              onChange={changeSearchHome}
            />
          </div>
        </label>
      </div>

      <div className="flex justify-end">
        <button className="d-inline-block rounded-lg bg-blue-500 px-4 py-2 text-white">
          <Link to="/home/create">Create new home</Link>
        </button>
      </div>

      <h2 className="pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#0e161b]">
        Homes
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(258px,1fr))] gap-3">
        {homes.map(function (home) {
          return (
            <div key={home.id} className="flex flex-col gap-3 pb-3">
              <div
                className="aspect-video w-full rounded-lg bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCk4uyauUW5rY1OTfZ27Zlmuav072VqqGBASm_-6CJAffhE_WQXjsabZasfgz6yW5QDdRtB8L8vvpw8gaf27ZVH1tvh1bY65SCxcT61sn1UmrWVPeTfs5fPScpy2Zck-REw6PZT59e5UJQygCdGT7zYm6lapzidcbrV5_R8kCLGBKrJgQO5ThPTODoPCsrNwGFbDtQR2CoMEZ6sSSTu4eNghwhpMvyqzSGztkCGxJp-HIDFM4qabh-mLHlw1plj8zJPRoBXJAQwFis")',
                }}
              ></div>
              <div>
                <p className="text-base font-medium leading-normal text-[#0e161b]">
                  {home.name} - {home.shortName}
                </p>
                <p className="text-sm font-normal leading-normal text-[#4e7a97]">
                  {home.address}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
