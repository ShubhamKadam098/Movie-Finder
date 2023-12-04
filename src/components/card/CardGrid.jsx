import Card from "./Card";

const CardGrid = () => {
  return (
    <>
      <div className="container mb-8 grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-5 gap-y-8 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default CardGrid;
