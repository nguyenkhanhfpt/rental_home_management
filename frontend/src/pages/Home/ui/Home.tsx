// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useHomeFeature } from '../model/Home.ts';

export const Home = async () => {
//   const { getHomes, homes } = useHomeFeature();

  // useEffect(() => {
  //     const fetchHomes = async () => {
  //         try {
  //             await getHomes();
  //         } catch (error) {
  //             console.error("Error fetching homes:", error);
  //         }
  //     };
  //     fetchHomes();
  // }, []);

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
              value=""
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
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="aspect-video w-full rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUbacaKlku2q1a_7GKUo4s1hdHViMtx_4Z2kF28nZj1ryBagd1x9ewP0oS1CEG6oD--pem9q5jED30Zeoxx-qK2ooj-hsJ0uSo--vMEkVnPszXkk4lLXbDbjzAyur4eZEjcP1lZMUxIqGgQg4B8J8YoxOrSFOMLs0wePJ9Rk9wNBLE9xObwo8y47fM4xbJXIFi37bGFBESeeLD0dVbclRs1oFl9zsUEWxY2GE8jcsad-G360cN7k9KSWTwU_P5Yd3FUu-Fp5flItg")',
            }}
          ></div>
          <div>
            <p className="text-base font-medium leading-normal text-[#0e161b]">
              Zermatt
            </p>
            <p className="text-sm font-normal leading-normal text-[#4e7a97]">
              Switzerland
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="aspect-video w-full rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_dBv-C3hWFDgS2mLdeUHprgM3Yovoeo4dnzMsFegLFMrd8Us3azytSd2MDzWkzC2LbCYRYLX4xKCSLtyflHqNf8HbZ7CbhMr9LMGiqXpOi5p7GRRZ7tHk4jb3nZMMTcsVFJhZuh29X9V1V1hN6CY4Ll8CplJsFpZW4-xt0_JenKLxEsyHmt-5kyujFZOpMZRLTdqJ5cVBt7vI6QhaR5ffCc5C7PqBONF0tb9bDZf-OYSHAWa2HOWR4way930xotKr_9daVdzuwUE")',
            }}
          ></div>
          <div>
            <p className="text-base font-medium leading-normal text-[#0e161b]">
              Chamonix
            </p>
            <p className="text-sm font-normal leading-normal text-[#4e7a97]">
              France
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="aspect-video w-full rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCk4uyauUW5rY1OTfZ27Zlmuav072VqqGBASm_-6CJAffhE_WQXjsabZasfgz6yW5QDdRtB8L8vvpw8gaf27ZVH1tvh1bY65SCxcT61sn1UmrWVPeTfs5fPScpy2Zck-REw6PZT59e5UJQygCdGT7zYm6lapzidcbrV5_R8kCLGBKrJgQO5ThPTODoPCsrNwGFbDtQR2CoMEZ6sSSTu4eNghwhpMvyqzSGztkCGxJp-HIDFM4qabh-mLHlw1plj8zJPRoBXJAQwFis")',
            }}
          ></div>
          <div>
            <p className="text-base font-medium leading-normal text-[#0e161b]">
              St. Moritz
            </p>
            <p className="text-sm font-normal leading-normal text-[#4e7a97]">
              Switzerland
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="aspect-video w-full rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoqZWVR7EoaYOSaQRinx0oslN8QySd89Ie1ygDMAkJv_Bq8XeDGJWtnFgYj_Ua43F8EAELSZcH-JQC7gJM5siyhgk_sqjqPhw4PG3XLAaZuewI9cOl9Q_UkY8sEEanHoENtLkk5xpJ3Yv9XxuhpKRd9Ikav6Z1I9DH_dBool2e5GUj9Y_Z-5aUAnSuq1nrUeamuEA2kJKGhDewqKhpVrk75-kKg1dHEP-GerG5GzAnIReJLndL5e4yxP3v52TuCJB8d3p9nvhaOPc")',
            }}
          ></div>
          <div>
            <p className="text-base font-medium leading-normal text-[#0e161b]">
              Val d'Isère
            </p>
            <p className="text-sm font-normal leading-normal text-[#4e7a97]">
              France
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="aspect-video w-full rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVwSIj4eB1sS8UHKWx5yyG7KwJ46DRm_-6gunie7MGyoTYWXL6VgkIHjIZWYLWAZgLmqI3MIzW1lxQ1QvqIr1QdcGLl-us-YBuWVniIFw2_VeW3VWE2Hdjb6UczDEqTVkU3lz7uPAPJNta237CAwLJRtU5O6ZA6gN-2mp4JXBtPm0KMMGmE9BN432csmekVXkMJABgCGvrHF602XltkfTm69PrH7KmhroF1TWpp68OAY5FVvwPGLpFXB7YW3zO5vYL-cC8MF6MOok")',
            }}
          ></div>
          <div>
            <p className="text-base font-medium leading-normal text-[#0e161b]">
              Verbier
            </p>
            <p className="text-sm font-normal leading-normal text-[#4e7a97]">
              Switzerland
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="aspect-video w-full rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDapPtFo-Z7o0u2gjEaqEYj2ZrPQ-df8QO2TLvuZsm9sJSigS35roIp3HVF3ZGLjFSVsY9-1OcYFmlvTVPibq7hq6cOU3KkQH4f9fi_Pqae_Oa-cfCXrLpfTmc-vtZa-m1356cYU1JCN2a1ozwFKw12i_mthi2Il7Va0IaJzsV2SdMAh-58rJNsJx2KO89y_8HAfF8g4luZxdRwGpUQCXlUTw72cwJ96fN7MmCknZGQM7_gBiJsl-q66G9bEcEYjEctflRT-oSRvMY")',
            }}
          ></div>
          <div>
            <p className="text-base font-medium leading-normal text-[#0e161b]">
              Courchevel
            </p>
            <p className="text-sm font-normal leading-normal text-[#4e7a97]">
              France
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="aspect-video w-full rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDapPtFo-Z7o0u2gjEaqEYj2ZrPQ-df8QO2TLvuZsm9sJSigS35roIp3HVF3ZGLjFSVsY9-1OcYFmlvTVPibq7hq6cOU3KkQH4f9fi_Pqae_Oa-cfCXrLpfTmc-vtZa-m1356cYU1JCN2a1ozwFKw12i_mthi2Il7Va0IaJzsV2SdMAh-58rJNsJx2KO89y_8HAfF8g4luZxdRwGpUQCXlUTw72cwJ96fN7MmCknZGQM7_gBiJsl-q66G9bEcEYjEctflRT-oSRvMY")',
            }}
          ></div>
          <div>
            <p className="text-base font-medium leading-normal text-[#0e161b]">
              Courchevel
            </p>
            <p className="text-sm font-normal leading-normal text-[#4e7a97]">
              France
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
