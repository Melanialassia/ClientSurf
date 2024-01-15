const ColorFilter = ({allColors}) => {
    return (
        <>
       {allColors.map((c, index) => (
        <option key={index} value={c.nameColor}>
          {c.nameColor}
        </option>
      ))}
        </>
    )
};

export default ColorFilter;