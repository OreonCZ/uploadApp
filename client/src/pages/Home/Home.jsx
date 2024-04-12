import { Link } from "react-router-dom";
import { getUploads } from "../../models/uploads";
import { useState, useEffect } from "react";
import Article from "../../components/Article/Article";

export default function Home() {
  const [uploads, setUploads] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getUploads();
    if(data.status === 200){
      setUploads(data.payload);
      return setLoaded(true);
    }
    setLoaded(null);
  };

  useEffect(() => {
    load();
  }, []);

  if(isLoaded === null){
    return (
      <>
      <div className="main-div">
          <h1>No nic, je to over</h1>
          <Link to={"/upload"}>
              <button>přidat inzerát</button>
          </Link>
      </div>
      </>
    )
  }

  return (
    <>
    <div className="main-div">
        <h1>Home page</h1>
      {
        isLoaded ? (
          uploads.map((upload, index) => <Article key = {index} {...upload}/>)
        ) : (
          <p>načítám inzeráty</p>
        )
      }
        <Link to={"/upload"}>
            <button>přidat inzerát</button>
        </Link>
    </div>
    </>
  )
}
