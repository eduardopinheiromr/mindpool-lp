import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    height: 48,
    border: 0,
    boxShadow: "none",
    cursor: "pointer",
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
    cursor: "pointer",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

export type SelectorProps = {
  options: { value: string; label: string }[];
  placeholder: string;
};

export default function Selector({ options, placeholder }: SelectorProps) {
  return (
    <Select styles={customStyles} placeholder={placeholder} options={options} />
  );
}
