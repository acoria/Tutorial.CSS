import style from "./Test.module.css";

export const Test: React.FC = () => {
  return (
    <div className={style.boards}>
      <div className={style.first}>Test1</div>
      <div className={style.second}>Test2</div>
      <div className={style.third}>Test3</div>
    </div>
  );
};
