import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    height: 48,
    border: 0,
    boxShadow: "none",
  }),
  placeholder: (provided) => ({
    ...provided,
    fontWeight: "bold",
  }),
  option: (provided, state) => ({
    ...provided,
    color: "#1C987D",
    background: state.isSelected ? "#35f5cb" : "white",
    padding: 15,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

export default function Selector({ options, placeholder }) {
  return (
    <Select styles={customStyles} placeholder={placeholder} options={options} />
  );
}
