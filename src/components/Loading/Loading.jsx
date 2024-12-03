import { BounceLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="container mx-auto max-w-[1170px] flex justify-center items-center h-[50vh]">
      <BounceLoader color="#F1C40F" size={60} />
    </div>
  );
}
