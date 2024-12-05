import Genre from "./Genre";

/*Container - Parent Component includes movie genres information.[PhyoMin]*/
function Container() {
  return (
    <>
      <h1>&#10172; Movie-101</h1>
      <div className="genreList">Genre List -</div>
      <Genre
        name="Comedy"
        description="Amuse audiences and make them laugh."
        movieTitle1="Snatch"
        movieTitle2="Rush Hour 2"
      />

      <Genre
        name="Romance"
        description="Focus on passion, emotion, and the romantic involvement of the characters."
        movieTitle1="All the Pretty Horses"
        movieTitle2="My Sassy Girl"
      />
    </>
  );
}

export default Container;
