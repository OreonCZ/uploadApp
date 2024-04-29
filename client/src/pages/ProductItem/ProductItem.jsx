import StickySearchMenu from "../../components/StickySearchMenu/StickySearchMenu";

function Product() {
  return (
    <>
    <StickySearchMenu />
      <div className="container is-flex pt-7">
        <img src="https://i.ibb.co/5RRH8yL/75de1c2d3f5fefb7a8526bf4347bdb7d-mmf400x400-removebg-preview.png" alt="" />
        <div className="block">
          <p className="title is-3 ">Lenovo LOQ 15IRX9 83DV006PCK</p>
          <p className="subtitle is-4">20 000 CZK</p>
          <p className="subtitle is-5">Name: </p>
          <p className="subtitle is-5">Contact: </p>
          <p className="subtitle is-5">Location: </p>
        </div>
      </div>
    </>
  );
}

export default Product;
