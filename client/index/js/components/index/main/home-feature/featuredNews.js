import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';

export class FeaturedNews extends React.Component {
  render(){
    return(
    <section className="section-3">
      <div className="container">
        <div className="headline">
          <Link to="/home" className="title-text"><h2>Featured News</h2></Link>
        </div>
        <div className="feature-new row margin-bottom-20">
          <div className="col-md-3 col-sm-6">
            <div className="thumbnails thumbnail-style thumbnail-kenburn">
              <div className="thumbnail-img">
                <div className="overflow-hidden">
                  <img className="img-responsive" src="../index/img/feature/img1.jpg" alt="" />
                </div>
                <a className="btn-more hover-effect" href="#">read more +</a>
              </div>
              <div className="caption">
                <h3><a className="hover-effect" href="#">Project One</a></h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, justo sit amet risus etiam porta sem.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="thumbnails thumbnail-style thumbnail-kenburn">
              <div className="thumbnail-img">
                <div className="overflow-hidden">
                  <img className="img-responsive" src="../index/img/feature/img2.jpg" alt="" />
                </div>
                <a className="btn-more hover-effect" href="#">read more +</a>
              </div>
              <div className="caption">
                <h3><a className="hover-effect" href="#">Project Two</a></h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, justo sit amet risus etiam porta sem.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="thumbnails thumbnail-style thumbnail-kenburn">
              <div className="thumbnail-img">
                <div className="overflow-hidden">
                  <img className="img-responsive" src="../index/img/feature/img3.jpg" alt="" />
                </div>
                <a className="btn-more hover-effect" href="#">read more +</a>
              </div>
              <div className="caption">
                <h3><a className="hover-effect" href="#">Project Three</a></h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, justo sit amet risus etiam porta sem.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="thumbnails thumbnail-style thumbnail-kenburn">
              <div className="thumbnail-img">
                <div className="overflow-hidden">
                  <img className="img-responsive" src="../index/img/feature/img4.jpg" alt="" />
                </div>
                <a className="btn-more hover-effect" href="#">read more +</a>
              </div>
              <div className="caption">
                <h3><a className="hover-effect" href="#">Project Four</a></h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, justo sit amet risus etiam porta sem.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
