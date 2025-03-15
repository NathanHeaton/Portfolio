

export default function Carousel()
{

    return(
        <div id="carousel" className="image-center">
            <div className="carousel-inner">
                <div className="carousel-item active">
                </div>
                <div className="carousel-item active">
                </div>
                <div className="carousel-item active">
                </div>
                <div className="carousel-item active">
                </div>
                <div className="carousel-item active">
                </div>
                <div className="carousel-item active">
                </div>

            </div>


            <div className="carousel-indicators">
                <span className="dot active" data-index="0"></span>
                <span className="dot" data-index="1"></span>
                <span className="dot" data-index="2"></span>
                <span className="dot" data-index="3"></span>
                <span className="dot" data-index="4"></span>
                <span className="dot" data-index="5"></span>
            </div>
        </div>
        );
}