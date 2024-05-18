import NewsWrap from "./NewsWrap";
import { getYesterdayDate } from "../UtilityFun/UsefulFun";
import { useEffect, useState } from "react";
import DemoWrap from "./DemoWrap";
export default function NewsBoard({ category }) {
  const [currNews, setCurrNews] = useState([]);
  const [loading, setLoading] = useState(true);
  let formattedDate = getYesterdayDate();
//   api.org/v2/top-headlines?country=us&apiKey=9fa739e73718460eb1238ba780d5e8b3
  useEffect(() => {
    function apiCall() {
      const API_KEY = "9fa739e73718460eb1238ba780d5e8b3";
      const url = `https://newsapi.org/v2/everything?q=${category}&from=${formattedDate}&to=${formattedDate}&sortBy=popularity&apiKey=${API_KEY}`;
      console.log(url)
      fetch(url)
        .then((resp) => {
          resp.json().then((result) => {
            setCurrNews(result.articles);
            setLoading(false); 
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false); // Set loading to false in case of error
        });
    }
    apiCall();
  }, [category]);

  return (
    <>
      {/* {date} */}
      <h1 className="text-center mt-4">
        <span className="badge bg-dark text-warning">Latest</span> News
      </h1>
      {
        loading?(
            <div className="spinner-wrap">
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        ):(
            <div className="container-md">
                <div className="row justify-content-center gap-2 mt-4 ">
                {
                 currNews &&  currNews.map((news, i) => {
                      if (news.urlToImage) {
                      return <NewsWrap key={i} news={news} />;
                      // return <DemoWrap key={i}/>
                      }
                      return null;
                  })
                }
                </div>
            </div>
        )
      }
      
    </>
  );
}
