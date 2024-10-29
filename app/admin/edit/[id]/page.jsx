// Page.jsx
import { cookies } from 'next/headers';
import EditBlog from './edit';

const Page = ({params}) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
console.log(accessToken);

  return (
    <div>
      <EditBlog accessToken={accessToken} params={params} />
    </div>
  );
};

export default Page;
