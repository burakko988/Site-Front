import mockData from '../../mock/mockData';

const DetailNav = () => {
  return (
    <nav id="eventDetailsNav">
      <div className="eventDetailsContainer">
        <section className="searchBar">
          <input type="text" placeholder="Etkinlik, Sanatçı veya Mekan Arayın" />
        </section>
        <section className="cityOption">
          <select name="city" id="city">
            {mockData.map((e) => {
              return (
                <option key={e.id} value={e.etkinlikYeri.split(' ')[0]}>
                  {e.etkinlikYeri.split(' ')[0]}
                </option>
              );
            })}
          </select>
        </section>
      </div>
    </nav>
  );
};

export default DetailNav;
