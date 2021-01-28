import React from "react";
import ListCategories from "../categories/ListCategories";
import "../css/Categories.css";

const Categories = () => {
  return (
    <>
      <div className='categories'>
        <div className='categories__heading'>
          <h1>Shop Our Express &amp; Global Collections!</h1>
        </div>
        <div className='listCategories'>
          <ListCategories
            Icon='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w4/collections/express-phones_web.jpg'
            Title='Express phones'
          />
          <ListCategories
            Icon='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w4/collections/express-home_web.jpg'
            Title='express home'
          />
          <ListCategories
            Icon='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w4/collections/express-men_web.jpg'
            Title='express men'
          />
          <ListCategories
            Icon='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w4/collections/express-women-web.jpg'
            Title='express women'
          />
          <ListCategories
            Icon='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w4/collections/express-watches_web.jpg'
            Title='express watches'
          />
          <ListCategories
            Icon='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w4/collections/express-groceries_web.jpg'
            Title='express meals'
          />
          <ListCategories
            Icon='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w4/collections/global-phones_web.jpg'
            Title='express phones'
          />
          <ListCategories
            Icon='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w4/collections/global-home_web.jpg'
            Title='global home'
          />
          <ListCategories
            Icon='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w4/collections/global-men_web.jpg'
            Title='global men'
          />
          <ListCategories
            Icon='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w4/collections/global-women_web.jpg'
            Title='global women'
          />
          <ListCategories
            Icon='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w4/collections/global-shoes_web.jpg'
            Title='global shoes'
          />
          <ListCategories
            Icon='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w4/collections/global-watches_web.jpg'
            Title='global watches'
          />
        </div>
      </div>
    </>
  );
};

export default Categories;
