import pic from '../assets/news.jpg'
export default function NewsWrap(props){
    return (
        <>
            <div className="card"  >
                <img src={props.news.urlToImage} className="card-img-top " alt=""/>
                <div className="card-body">
                <h5 className="card-title">{props.news.title.slice(0, 25)+"..."}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Author : {props.news.author?props.news.author.slice(0,25):""}</h6>
                <h6 className="card-subtitle mb-2 text-right text-body-secondary">Publish Date : {props.news.publishedAt.slice(0,10)}</h6>
                <p className="card-text">{props.news.description.slice(0, 50)+"..."}</p>
                <a href={props.news.url} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </>
    )
}