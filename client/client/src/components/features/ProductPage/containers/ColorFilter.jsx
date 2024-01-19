
const ColorFilter = ({allColors}) => {
    return (
        <>
       {allColors.map((c, index) => (
        <option key={index} value={c.idColor}>
          {c.nameColor}
        </option>
      ))}
        </>
    )
};

export default ColorFilter;