function StickySearchMenu() {
  return (
    <>
      <div
        className="columns is-flex is-justify-content-center"
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div className="column is-one-fifth">
          <div className="field">
            <p className="control has-icons-left">
              <input type="text" className="input" />
              <span
                className="material-symbols-outlined icon is-left is-flex is-justify-content-center is-align-items-center"
                style={{ fontSize: "1.25rem", height: "40px", width: "3rem" }}
              >
                search
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StickySearchMenu;
