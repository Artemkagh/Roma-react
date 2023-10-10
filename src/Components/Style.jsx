import React from 'react';
import '../index.css';


function Style({items}){


    return(
        <div className='blocks'>
            
            { items && items.map( (item, index) => (
                <div className={index%2 === 0 ? 'item1' : 'item2'} key={`${item}_${index}`}>
                    <img alt="" src={item.pic} />
                    <span>{item.title}</span>
                </div>
            ))
            }
        </div> 
        );
}


export default Style;
