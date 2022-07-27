import React from "react";

const ServicesHeader = (props) => {
  return (
    <header className="container header__container">
        <>{props.leftContent}</>
        <>{props.rightContent}</>
      <div className="header__right"></div>
    </header>
  );
};

export default ServicesHeader;

/*



        

        
*/
