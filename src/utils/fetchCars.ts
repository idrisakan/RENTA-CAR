import { CarType } from "../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e6621f0f34msh1fe5eb1834aa74cp153ecdjsnddb6ee16fc8d",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

// Normal de bu fonksiyonumuz bir CarType dizisi return ediyor ama bu dizi api dan bir gecikme sonrasında geldiğinde dolayı return satırına sadece CarType[] yazmıyoruz bu return edilen değeri Promise ismindeki interface'e generic tip olarak göndermeliyiz

type FilterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel_type?: string;
  year?: string;
};
export const fetchCars = async (paramsObj: FilterType): Promise<CarType[]> => {
  //parametre gelmediği durumlarda geçerli olacak varsayılan değerini belirle
  const {
    limit = "5",
    make = "bmw",
    model = "",
    fuel_type = "",
    year = "",
  } = paramsObj;

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}&limit=${limit}`;

  const res = await fetch(url, options);

  return await res.json();
};
