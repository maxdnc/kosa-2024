import CardAccomodation from '../../reusable-UI/CardAccomodation.jsx';
import accommodationsData from '../../../api/accommodations.json';

const ListAccomodations = () => {
  return (
    <div>
      ListAccomodations
      <ul>
        {accommodationsData.map(({ id, title, cover }) => {
          return (
            <li key={id}>
              <CardAccomodation title={title} coverImgSrc={cover} id={id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ListAccomodations;
