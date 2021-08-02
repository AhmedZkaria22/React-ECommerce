import React, { useState } from "react";
import '../Style/AddItemModal.css';
import { Form, Row, Col, Button } from "react-bootstrap";
import UseFirestore from "../Firebase/UseFirestore";

let dt = new Date();
const initialItem = {
  title: "",
  desc: "",
  price: "",
  PriceBeforeDescount: "",
  createdAt: dt.toLocaleString().substring( 0, dt.toLocaleString().indexOf(",") ),
  colors: [],
  sizes: {},
  filter: "",
  gender: "",
  images: [],
};

function AddItemModal() {
  //           add product doc in 'Product Item' collection in firestore
  const [item, setItem] = useState(initialItem);
  //           add product doc in 'Product Item' collection in firestore

  //           call addProduct function from UseFirestore
  const [, addProduct] = UseFirestore();
  //           call addProduct function from UseFirestore

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    (fieldName === "sm" ||
    fieldName === "md" ||
    fieldName === "lg" ||
    fieldName === "xl")
      ? setItem({
          ...item,
          sizes: { ...item.sizes, [fieldName]: parseInt(fieldValue) },
        })
      // : (fieldName === "filter" && e.target.checked)
      // ? setItem({
      //     ...item,
      //     filter: FltTypeVal,
      //   })
      // : (fieldName === "gender" && e.target.checked)
      // ? setItem({
      //     ...item,
      //     gender: FltGenderVal,
      //   })  
      : (fieldName === "colors")
      ? setItem({
          ...item,
          colors: fieldValue.split(","),
        })
      : (fieldName === "images")
      ? setItem({
          ...item,
          images: fieldValue.split("*"),
        })  
      : setItem({
          ...item,
          [fieldName]: fieldValue,
        });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(item);
  };


  const handelCheck = (e) => {
    if( e.target.checked ){
      const fieldName = e.target.name;
      const fieldValue = e.target.value;
        (fieldName === "filter")
        ? setItem({
            ...item,
            filter: fieldValue,
          })
        : (fieldName === "gender")
        ? setItem({
            ...item,
            gender: fieldValue,
          })    
        : setItem({
          ...item,
          [fieldName]: fieldValue,
        });
    }
  }

  return (
    <div id="AddItemModal">
      <h1 className={"text-center"}>Type Product Item Details
      <Button
          id="form__close"
          onClick={() =>
            (document.getElementById("AddItemModal").style.display = "none")
          }
        >
          X
      </Button>
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="Title : "
          required
          onChange={handleChange}
          name="title"
        />
        
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Description : "
          required
          onChange={handleChange}
          name="desc"
        />

        <Row>
          <Col>
            <Form.Control
            type="text"
            placeholder="Price : 99.00"
            required
            onChange={handleChange}
            name="price"
            />          
          </Col>
          <Col>
            <Form.Control
            type="text"
            placeholder="PriceBeforeDescount : 102.00"            
            onChange={handleChange}
            name="PriceBeforeDescount"
            />          
          </Col>
        </Row>
        
        <Form.Control
          type="text"
          placeholder="Colors : #333,rgb(0,255,0),blue,...etc"
          required
          onChange={handleChange}
          name="colors"
        />
        
        <Form.Control
          type="text"
          placeholder="Images : link*link*...etc"
          required
          onChange={handleChange}
          name="images"
        />

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Form.Control
            required
            type="number"
            placeholder="small: "
            onChange={handleChange}
            name="sm"
          />
          <Form.Control
            required
            type="number"
            placeholder="medium: "
            onChange={handleChange}
            name="md"
          />
          <Form.Control
            required
            type="number"
            placeholder="large: "
            onChange={handleChange}
            name="lg"
          />
          <Form.Control
            required
            type="number"
            placeholder="x large: "
            onChange={handleChange}
            name="xl"
          />
        </div>

        <Form.Group className={'AddItemModal__filters'}>
          <Form.Label> Item Type </Form.Label>          
          <Form.Control name='filter' type='radio' id='radio1' value='shirt' onChange={ handelCheck } />
          <Form.Label htmlFor='radio1'> Shirts </Form.Label>          
          <Form.Control name='filter' type='radio' id='radio2' value='pant' onChange={ handelCheck } />
          <Form.Label htmlFor='radio2'> Pants </Form.Label>          
          <Form.Control name='filter' type='radio' id='radio3' value='shoes' onChange={ handelCheck } />
          <Form.Label htmlFor='radio3'> Shoes </Form.Label>
        </Form.Group>

        <Form.Group className={'AddItemModal__gender'}>
          <Form.Label> Gender </Form.Label>          
          
          {/* <Form.Control name='gender' type='radio' id='radio4' value='Men' onChange={ (event) => handelCheck(event) }/> */}
          <Form.Control name='gender' type='radio' id='radio4' value='men' onChange={ handelCheck }/>
          <Form.Label htmlFor='radio4'> Men </Form.Label>          

          {/* <Form.Control name='gender' type='radio' id='radio5' value='Female' onChange={ (event) => handelCheck(event) }/> */}
          <Form.Control name='gender' type='radio' id='radio5' value='female' onChange={ handelCheck }/>
          <Form.Label htmlFor='radio5'> Female </Form.Label>    

          {/* <Form.Control name='gender' type='radio' id='radio6' value='Twinz' onChange={ (event) => handelCheck(event) }/> */}
          <Form.Control name='gender' type='radio' id='radio6' value='twinz' onChange={ handelCheck }/>
          <Form.Label htmlFor='radio6'> Twinz </Form.Label>    
        </Form.Group>

        <Button variant="primary" type="submit" className={"w-100"}>
              Add
        </Button>

      </Form>
    </div>
  );
}

export default AddItemModal;
