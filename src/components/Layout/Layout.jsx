import css from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={css.container}>
      {/* left is sidebar */}
      <div>sidebar</div>

      {/* right is gradient */}
      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          {/* we have 3 gradient*/}
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>

        </div>
      </div>
    </div>
  );
};

export default Layout;
