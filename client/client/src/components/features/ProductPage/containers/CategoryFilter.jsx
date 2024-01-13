const CategoryFilter = ({ allCategorys }) => {
  return (
    <>
      {allCategorys.map((c, index) => (
        <option key={index} value={c.name}>
          {c.name}
        </option>
      ))}
    </>
  );
};
export default CategoryFilter;
