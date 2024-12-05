import Card from "./Card";
import Movie from "./Movie";

/*Genre - Child Component of Container includes genre and detailed movies information.[PhyoMin]*/
function Genre(props) {
  return (
    <Card>
      <h2>Genre: {props.name}*</h2>
      <p className="description">*{props.description}</p>
      <hr />
      <ul>
        <li>
          <Movie title={props.movieTitle1} released={2000} />
        </li>
        <li>
          <Movie title={props.movieTitle2} released={2001} />
        </li>
      </ul>
      <a href="#top" className="more">
        more...
      </a>
    </Card>
  );
}

export default Genre;
