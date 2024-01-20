const BrandsFilter = ({ allBrands, handleChange }) => {
  return (
    <>
      <select
      name="idBrand"
      onChange={(event) => handleChange(event)}
      >
        <option value="">TODAS</option>
        {allBrands.map((c, index) => (
          <option key={index} value={c.idBrand}>
            {c.brandName}
          </option>
        ))}
      </select>
    </>
  );
};

export default BrandsFilter;
