import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades </h2>
                        <p>Deslize ou clique para o lado para visualizar minhas habilidades.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src="https://drive.google.com/uc?export=view&id=1nvUzIBa2wA-Km9BcwYWliSI2-NRg0vsf" alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src="https://drive.google.com/uc?export=view&id=1nvUzIBa2wA-Km9BcwYWliSI2-NRg0vsf" alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src="https://drive.google.com/uc?export=view&id=1nvUzIBa2wA-Km9BcwYWliSI2-NRg0vsf" alt="Image" />
                                <h5>Suporte Técnico de Ti</h5>
                            </div>
                            <div className="item">
                                <img src="https://drive.google.com/uc?export=view&id=1nvUzIBa2wA-Km9BcwYWliSI2-NRg0vsf" alt="Image" />
                                <h5>Redes</h5>
                            </div>
                            <div className="item">
                                <img src="https://drive.google.com/uc?export=view&id=1nvUzIBa2wA-Km9BcwYWliSI2-NRg0vsf" alt="Image" />
                                <h5>Windows</h5>
                            </div>
                            <div className="item">
                                <img src="https://drive.google.com/uc?export=view&id=1nvUzIBa2wA-Km9BcwYWliSI2-NRg0vsf" alt="Image" />
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                                <img src="https://drive.google.com/uc?export=view&id=1nvUzIBa2wA-Km9BcwYWliSI2-NRg0vsf" alt="Image" />
                                <h5>macOS</h5>
                            </div>
                            <div className="item">
                                <img src="https://drive.google.com/uc?export=view&id=1nvUzIBa2wA-Km9BcwYWliSI2-NRg0vsf" alt="Image" />
                                <h5>Sony Vegas</h5>
                            </div>
                            <div className="item">
                                <img src="https://drive.google.com/uc?export=view&id=1nvUzIBa2wA-Km9BcwYWliSI2-NRg0vsf" alt="Image" />
                                <h5>PhotoShop</h5>
                            </div>
                            <div className="item">
                                <img src="https://drive.google.com/uc?export=view&id=1nvUzIBa2wA-Km9BcwYWliSI2-NRg0vsf" alt="Image" />
                                <h5>Elétrica Industrial</h5>
                            </div>
                            <div className="item">
                                <img src="https://drive.google.com/uc?export=view&id=1nvUzIBa2wA-Km9BcwYWliSI2-NRg0vsf" alt="Image" />
                                <h5>Elétrica Predial</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}
