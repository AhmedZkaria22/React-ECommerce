import '../Style/Home.css'
import React, { useEffect } from 'react'
import 'react-bootstrap'
import { Container, Row, Col, Carousel, Figure } from 'react-bootstrap'

import FamilySectionCol from '../Components/Home/FamilySectionCol'
import SaleSection4smFigure from '../Components/Home/SaleSection4smFigure'
import NewSectionFigure from '../Components/Home/NewSectionFigure'
import HomeCarouselItem from '../Components/Home/HomeCarouselItem'
import ServicesSectionCol from '../Components/Home/ServicesSectionCol'
import UseFirestore from '../Firebase/UseFirestore'

import headerPh from '../Photos/brand.jpg';
import vd1 from '../Photos/Project.mp4';
import { Link } from 'react-router-dom'
// import vd2 from '../Photos/Project.ogv';

function Home (){
    const [,,monthlySale,newShirts,,,] = UseFirestore();

    useEffect(() => {
        // handel item if not have discount price
        let salePrices = document.querySelectorAll("#saleSection .saleSection_4sm > a .figure-caption p:first-of-type");
        for( let i=0; i<salePrices.length; i++ ){
            if( salePrices[i].nextElementSibling.style.display === 'none' ){
                salePrices[i].style.float = 'none';
                salePrices[i].style.clear = 'both';
                salePrices[i].style.width = '100%';
                salePrices[i].style.textAlign = 'center';
            }
        };
    });

    return (
    <>
        <section id="familySection" className={'beforeNav'}>
            <Container>
                <Row>
                    <FamilySectionCol cardType={"Men"}/>
                    <FamilySectionCol cardType={"Women"}/>  
                    <FamilySectionCol cardType={"Twinz"}/>
                </Row>
            </Container>
        </section>

        <section id="videoSection">
            <p className={'text-center text-muted'}> Graduation Project from Institute 2020 - MIS </p>
            <video  controls autoPlay poster={headerPh}>
                <source src={vd1} type="video/mp4"></source>
                {/* <source src={vd2} type="video/ogv"></source> */}
                {/* Your browser doesn't support video tag */}
            </video>
        </section>

        <section id="addsSection">
            <img src="https://souqcms.s3.eu-west-1.amazonaws.com/sanfronto/eg/2020/web/Banners/HPs/Apr/SellonSouq-HP-Strip-en.jpg" className="img-fluid"/>
        </section>            
    
        <Container id="saleSection">
            <h1>Monthly Sale</h1>
            <Row className={"text-center"}>
                <Col lg={6} md={9} sm={12}>
                {
                    monthlySale.map( (monthlySaleItem, index) => ( index === 0 ) &&
                    <Figure as={Link} to={`/ReactEcommerceTest/${monthlySaleItem.id}`}>
                        <Figure.Image  src={`${monthlySaleItem.images[0]}`} style={{ width: '70%' }}/>
                        <Figure.Caption> 
                            <h3 className={'text-center'}>{monthlySaleItem.title}</h3> 
                            { ( monthlySaleItem.PriceBeforeDescount ) 
                                ? <> <p> EGP {monthlySaleItem.price} </p> <p> EGP {monthlySaleItem.PriceBeforeDescount} </p> </>
                                : <p> EGP {monthlySaleItem.price} </p>
                            }
                        </Figure.Caption>
                    </Figure>
                    )
                }
                </Col>
                <Col lg={6} md={11} sm={12}>
                    <section className={'saleSection_4sm'}>
                        {
                            monthlySale.map( (monthlySaleItem, index) => ( index > 0 ) &&
                                <SaleSection4smFigure key={index} preload={[`${monthlySaleItem.images[0]}`, `${monthlySaleItem.title}`, `EGP ${monthlySaleItem.price}`, `${ (monthlySaleItem.PriceBeforeDescount) ? `EGP ${monthlySaleItem.PriceBeforeDescount}` : '' }`, `${monthlySaleItem.id}`]} />
                            )
                        }
                    </section>
                </Col>
            </Row>
        </Container>        

        <section id="newSection">
            <h1>New Shirts</h1>
            <article className="newSection_row">
                {
                    newShirts.map( (Product, index) => 
                        <NewSectionFigure key={index}  preload={[`${Product.images[0]}`, `${Product.title}`, `${Product.price}`, Product.id.trim()]} />
                    )
                } 
            </article>
        </section>

        <Carousel> 
            <Carousel.Item>
                <HomeCarouselItem  preload={[
                    "Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum."
                    , "https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg"
                    , "Petey Cruiser", "Designer at colorlib"
                ]} />
            </Carousel.Item>
            <Carousel.Item>
                <HomeCarouselItem  preload={[
                    "Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum."
                    , "https://365psd.com/images/istock/previews/9730/97305669-avatar-icon-of-girl-in-a-baseball-cap.jpg"
                    , "Laila Hassan", "Developer at colorlib"
                ]} />
            </Carousel.Item>
            <Carousel.Item>
                <HomeCarouselItem  preload={[
                    "Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum."
                    , "https://kehrer24.de/wp-content/uploads/2021/05/bearded-man-icon-64.png"
                    , "7oda Child", "Tester at colorlib"
                ]} />
            </Carousel.Item>
        </Carousel>            

        <Container id="servicesSection">
            <Row > 
                <ServicesSectionCol preload={[0, "Fast & Free Delivery", "Free delivery on all orders"]}/>
                <ServicesSectionCol preload={[1, "Secure Payment", "Free delivery on all orders"]}/>
                <ServicesSectionCol preload={[2, "Money Back Guarantee", "Free delivery on all orders"]}/>
                <ServicesSectionCol preload={[3, "Online Support", "Free delivery on all orders"]}/>
            </Row>
        </Container>
    </>
    )    
}

export default Home
