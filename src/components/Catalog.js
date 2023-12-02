import MyCard from './MyCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Col, Row} from "react-bootstrap";

function Cataog(){

    const [products, setProducts] = useState([{}, {}]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://656b455adac3630cf727ee42.mockapi.io/haradforeverProducts')
            setProducts(res.data);
        }
        fetchData();
    }, []);
    return(
        <div className= "d-flex, p-3">
                <Row md={40} className="g-4">
                            {products.map((products, id) => {
                                return(
                                    <Col key={id}>
                                        <MyCard {...products}/>
                                    </Col>
                                )
                            })}
                        </Row>
        </div>
    );
}

export default Cataog;