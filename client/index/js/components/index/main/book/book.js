import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Masonry from 'react-masonry-component';
class Header extends React.Component{
  render(){
    return(
      <div className="breadcrumbs-v1">
        <div className="container">
          <span>Zuna Việt Nam</span>
          <h1>Sách giáo dục</h1>
        </div>
      </div>
    )
  }
}

export class Book extends React.Component {
  constructor(){
    super();
    this.state = {
      books : [
        {
          src: "../index/img/event/img6.jpg"
        },
        {
          src: "../index/img/event/img7.jpg"
        },
        {
          src: "../index/img/concept/concept1.jpg"
        },
        {
          src: "../index/img/concept/concept2.png"
        },
        {
          src: "../index/img/concept/img12.jpg"
        },
        {
          src: "../index/img/concept/img13.jpg"
        },
        {
          src: "../index/img/feature/img1.jpg"
        }]
    }
  }
  render(){
    const masonryOptions = {
      transitionDuration: 0
    };
    const childElements = this.state.books.map(function(book,stt){
      return (
        <li key={stt} className="col-md-4 image-element-class">
          <div className="masonry-main">
            <img src={book.src} />
            <div   className="grid-boxes-caption">
              <h3><a href="#">Unify Clean and Fresh Fully Responsive Template</a></h3>
              <ul   className="list-inline grid-boxes-news">
                <li><span>By</span> <a href="#">Kathy Reyes</a></li>
                <li>|</li>
                <li><i   className="fa fa-clock-o"></i> July 06, 2014</li>
                <li>|</li>
                <li><a href="#"><i   className="fa fa-comments-o"></i> 06</a></li>
              </ul>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </li>
      );
    });
    return(
      <div>
        <Header />
        <div className="container content masonry">
          <Masonry
            className={'row masonry'} // default ''
            elementType={'ul'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          >
            {childElements}
          </Masonry>
        </div>
      </div>

    )

  }
}
