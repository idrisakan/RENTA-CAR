import { useSearchParams } from "react-router-dom";
import Button from "./Button";

const ShowMore = () => {
  const [params, setParams] = useSearchParams();

  /*
    * 1) URL'de limit parametresi yoksa:
    * Kullanıcı projeye yeni girmiştir ve varsayılan olarak ekranda 5 araç vardır.
    * Butona tıklanınca url param eklenmeli ve değeri 10 olmalı

    * 2) URL'de limit parametresi varsa:
    * Kullanıcı en az 1 kere butona basmıştır
    * Mevcut limitin üzerine 5 ekle
    */

  //url deki limit parametresini al (oarams yoksa 5 olsun)
  const limit = Number(params.get("limit")) || 5;

  const increaseLimit = () => {
    //yeni limit belirle
    const newlimit = limit + 5;

    //parametre güncelle
    params.set("limit", String(newlimit));

    //url güncelle
    setParams(params);
  };
  return (
    <div className=" w-2full flex-center gap-5 my-10">
      {limit < 30 && <Button title="Daha Fazla" handleClick={increaseLimit} />}
    </div>
  );
};

export default ShowMore;
