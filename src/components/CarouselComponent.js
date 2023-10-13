import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/Pictures.css';

const CarouselComponent = () => {
    return (
        <>
            <div className='titulo'>
                <h1>Bienvenido a GreenPage!</h1>
            </div>
            <div className='carrouselContainer'>
                <Carousel 
                showThumbs={false}
                autoPlay={true}
                showArrows={false}
                showIndicators={true}
                infiniteLoop={true}
                swipeable={true}
                showStatus={false}
                interval={3000}
                transitionTime={500}
                >
                    <div className='imgContainer'>
                        <img className='imgs'    
                            src="https://www.gagebeasleyshop.com/cdn/shop/articles/hans-jurgen-mager-CHqbiMhQ_wE-unsplash_1200x1200.jpg?v=1647831849"
                            alt="Oso Polar"

                        />      </div>
                    <div className='imgContainer'>
                        <img className='imgs'
                            src="https://avicultura.com/wp-content/uploads/2016/06/greenpeace-1.jpg"
                            alt="Greenpeace"

                        />      </div>
                    <div className='imgContainer'>
                        <img className='imgs'
                            src="https://tourismmedia.italia.it/is/image/mitur/1600X900_natura_lago_di_carezza?wid=1600&hei=900&fit=constrain,1&fmt=webp"
                            alt="Naturaleza"

                        />      </div>
                </Carousel>
            </div>
            <div className='infos'>
            <div className="info1">
                <h2 className='title'>¿Quiénes somos?</h2>
                <p>Somos un equipo apasionado y comprometido con la causa medioambiental. Nos une la convicción de que el cambio climático es uno de los desafíos más urgentes de nuestro tiempo, y creemos firmemente en la necesidad de actuar de manera colectiva para enfrentarlo. Nuestra comunidad está formada por científicos, expertos en medio ambiente, educadores y entusiastas de todo el mundo, unidos por el propósito de informar y concienciar sobre la crisis climática.</p>
            </div>
            <div className="info2">
                <h2 className='title'>¿Qué hacemos?</h2>
                <p>Nuestro compromiso es proporcionar información precisa y actualizada sobre el cambio climático, presentando investigaciones científicas, datos y soluciones viables de manera accesible para todos. A través de artículos, informes y recursos multimedia, abordamos diversos aspectos de esta crisis global, desde sus causas hasta sus impactos y las medidas que podemos tomar para mitigarlos. Además, organizamos eventos y colaboramos con organizaciones afines para impulsar acciones concretas en pro del medio ambiente.</p>
            </div>
            <div className="info3">
                <h2 className='title'>¿Qué buscamos?</h2>
                <p>Además, creemos que aprender sobre el cambio climático no debe ser aburrido ni abrumador. Es por eso que ofrecemos una experiencia única a través de nuestra sección de juegos interactivos. Nuestros quizzes no solo desafían tus conocimientos sobre el cambio climático, sino que también te brindan información valiosa de una manera entretenida y atractiva. Creemos firmemente que enseñar divirtiéndonos es una forma efectiva de inspirar el cambio y motivar a las personas a tomar medidas concretas para combatir el cambio climático. ¡Únete a nosotros y juntos hagamos la diferencia!</p>
            </div>
            </div>


        </>

    );
};

export default CarouselComponent;
