// Page.jsx
import Postjob from '@/app/componets/post';
import { cookies } from 'next/headers';

const Page = () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
console.log(accessToken);

  return (
    <div>
      <Postjob accessToken={accessToken} />
    </div>
  );
};

export default Page;
