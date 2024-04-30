import { useNavigate } from "react-router-dom";

function StickySearchMenu() {

  let navigate = useNavigate()

  return (
    <>
      <div
        className="columns is-flex is-justify-content-center is-align-items-center"
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <span className="material-symbols-outlined" onClick={() => navigate(-1)} style={{fontSize: '2rem', position: 'absolute', left: '2rem', cursor: 'pointer', userSelect: 'none'}}>keyboard_return</span>
        <div className="column is-one-fifth">
          <div className="field">
            <p className="control has-icons-left">
              <input type="text" className="input" />
              <span
                className="material-symbols-outlined icon is-left is-flex is-justify-content-center is-align-items-center"
                style={{
                  fontSize: "1.25rem",
                  height: "40px",
                  width: "3rem",
                  color: "#a31bf1",
                }}
              >
                search
              </span>
            </p>
          </div>
        </div>
        <button
          className="button"
          style={{ height: "2.5rem", color: "#a31bf1" }}
        >
          Upload
        </button>
      </div>
    </>
  );
}

export default StickySearchMenu;
