const SizeFilter = ({ allSize, handleChange }) => {
  return (
    <>
      <select
       name="idSize"
       onChange={(event) => handleChange(event)}
      >
        <option value="">TODAS</option>
        {allSize.map((c, index) => (
          <option key={index} value={c.idSize}>
            {c.nameSize}
          </option>
        ))}
      </select>
    </>
  );
};

export default SizeFilter;
