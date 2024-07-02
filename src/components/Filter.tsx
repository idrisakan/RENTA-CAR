import { useSearchParams } from "react-router-dom";
import Select, { SingleValue } from "react-select";

type OptionType = {
  label: string;
  value: string;
};

type Props = {
  options: OptionType[];
  name: string;
};
const Filter = ({ options, name }: Props) => {
const [params, setParams] = useSearchParams();

  const handleCange = (e: SingleValue<OptionType>) => {
    params.set(name, e?.value as string);
    setParams(params)
  };
//urlden daha önce seçilen  seçeneği alıp select birleşenşn isteği forma çevirdik
  const selectedOpt = {
    label: params.get(name) || options[0].label,
    value: params.get(name) || options[0].value,
  }
  return (
    <div className="w-fit">
      <Select
      defaultValue={selectedOpt}
        onChange={handleCange}
        options={options}
        className="text-black min-w-[100px]"
      />
    </div>
  );
};

export default Filter;
