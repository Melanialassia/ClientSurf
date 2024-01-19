const CategoryFilter = ({ allCategorys }) => {
  return (
    <>
      {allCategorys.map((c, index) => (
        <option key={index} value={c.nameCategory}>
          {c.nameCategory}
        </option>
      ))}
    </>
  );
};
export default CategoryFilter;
