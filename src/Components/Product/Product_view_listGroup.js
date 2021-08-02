import React  from 'react'
import { ListGroup } from 'react-bootstrap'

function Product_view_listGroup({preload, cTg, sizesCount}) {

    const handelClickListner = (String, Number) => {
        let sibList1 = document.querySelectorAll(String);        
        sibList1[Number].classList.add("checked");
        sibList1[Number].classList.remove("unChecked");    
        console.log( sibList1[Number] );   
    }

    const clickChecker = (String, Number) => {
        let sibList = document.querySelectorAll(String);
        console.log( sibList[Number] );
        sibList[Number].onClick = handelClickListner(String, Number);
        for(var i=0; i<sibList.length; i++){
            if( i != Number ){
                sibList[i].classList.add("unChecked");
                sibList[i].classList.remove("checked");
                console.log( sibList[i] );
            }
        }
    }

    return (
        <ListGroup horizontal>
            {   
                preload.map( (val, index) => 
                    ( index === cTg[1] ) ?  
                    <ListGroup.Item key={index}>{ React.createElement( `${cTg[0]}`, null, `${val}` ) }</ListGroup.Item>
                    : (preload[0] === 'Color') 
                        ? <ListGroup.Item key={index} onClick={ () => 
                            clickChecker("#Test_Product_view .row > div:last-of-type .list-group:nth-of-type(3) .list-group-item:not(:first-of-type)", index-1)
                        }>{ React.createElement("p", {style: { backgroundColor: `${val}` }}, null ) }</ListGroup.Item>
                        
                        : <ListGroup.Item key={index} onClick={() => {
                            document.querySelector(".Product_view_sizeStock").style.display = "block";
                            document.querySelector(".Product_view_sizeStock span").textContent = sizesCount[index-1];
                            clickChecker("#Test_Product_view  .row:first-of-type > div:last-of-type > .list-group:nth-of-type(2) .list-group-item:not(:first-of-type)", index-1)
                        }}>{val}</ListGroup.Item>
                )
            }
        </ListGroup>      
    )
}

export default Product_view_listGroup