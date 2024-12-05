/*Movie - Genre component passes down detailed movies information to this component.[PhyoMin]*/
function Movie({ title, released }) {
  return (
    <>
      <p>
        {title} - <i>(released in {released})</i>
      </p>
    </>
  );
}

export default Movie;
