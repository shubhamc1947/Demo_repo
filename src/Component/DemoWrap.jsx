import pic from '../assets/news.jpg'
export default function DemoWrap(props){
    return (
        <>
            <div className="card"  >
                <img src={pic} className="card-img-top " alt=""/>
                <div className="card-body">
                <h5 className="card-title">Lorem ipsum dolor sit amet consectetur.</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Author : Lorem, ipsum dolor.</h6>
                <h6 className="card-subtitle mb-2 text-right text-body-secondary">Publish Date : Lorem ipsum dolor </h6>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta, iure esse officiis voluptas distinctio vero fuga, pariatur, repudiandae ipsum quasi totam alias accusantium. Optio nulla ex ut amet! Voluptas?</p>
                <a href="#" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </>
    )
}