import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Detail Page for ID: {id}</h1>
    </div>
  );
};
export default DetailPage;
