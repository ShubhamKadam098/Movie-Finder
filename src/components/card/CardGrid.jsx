import Card from "./Card";

const CardGrid = ({ movieList = [] }) => {
  return (
    <>
      <div className="container mb-8 grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-5 gap-y-8 ">
        {movieList.map((movie) =>
          movie.poster_path ? <Card key={movie.id} movieDetails={movie} /> : ""
        )}
      </div>
    </>
  );
};

export default CardGrid;
