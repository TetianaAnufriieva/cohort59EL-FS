import type { JSX } from "react";
import style from "./CityPage.module.css";
import bmw7 from "./img/bmw7.jpg";

export default function CityPage(): JSX.Element {
  return (
    <div className={style.cityClass}>
      <h1>Всё о городе</h1>
      <h2><span className={style.first}>Ш</span>вери́н</h2>
      <p>
        Как свидетельствует немецкий хронист Титмар Мерзебургский, Шверин возник
        вблизи разгромленного в 1018 году славянского укрепления
        Зверин[9](Zuarin, в.-луж. Zwěrin) в 1160 году по указанию Генриха Льва,
        став при этом первым городом на завоёванной у славян территории. В
        течение 1167—1648 годов он был местом нахождения епископа и духовным
        центром всего региона. В 1358 году герцог Мекленбурга Альбрехт II
        получил в наследство город, имевший право быть местом резиденции графа,
        и поселился в замке, который за исключением двух перерывов служил местом
        пребывания герцогов Мекленбургских вплоть до 1918 года. В 1628—1631
        годах герцоги были вынуждены покинуть его в наказание за их союзнические
        отношения с Данией и в 1756—1837 годах, когда их резиденция находилась в
        Людвигслюсте.
      </p>
      <img
        className={style.imageClass}
        src="https://germanyask.com/wp-content/uploads/2018/01/22-1.jpg"
        alt="Schwerin"
      />
      <h1>1 способ подгрузить через импорт</h1>
      <img className={style.imageClass} src={bmw7} alt="BMW7" />
      <h1>2 способ подгрузить из папки public</h1>
      <img className={style.imageClass} src="porsche.png" alt="Porsche" />
    </div>
  );
}
