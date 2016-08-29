import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Stores from '../../../stores/stores'
import Masonry from 'react-masonry-component'

export class FeaturedNews extends React.Component {
  constructor(){
    super();
    this.state = {
      news: []
    }
  }
  componentWillMount(){
    var news = [];
    this.getNews(this,news)
  }
  getNews(t,news){

    Stores.find('/dermatoglyphics',{
      order: 'id DESC',
      limit: 2
    }, function(result1){
      result1[0].src = '/van-tay-hoc';
      result1[1].src = '/van-tay-hoc';
      news.push(result1[0],result1[1]);
      Stores.find('/events',{
        order: 'id DESC',
        limit: 1
      }, function(result2){
        result2[0].src = '/su-kien';

        news.push(result2[0]);
        Stores.find('/programs',{
          order: 'id DESC',
          limit: 1
        }, function(result3){
          result3[0].src = '/chuong-trinh';

          news.push(result3[0]);
          Stores.find('/books',{
            order: 'id DESC',
            limit: 2
          }, function(result4){
            result4[0].src = '/sach-giao-duc';
            result4[1].src = '/sach-giao-duc';
            news.push(result4[0],result4[1]);

            Stores.find('/parents',{
              order: 'id DESC',
              limit: 2
            }, function(result5){
              result5[0].src = '/goc-cha-me';
              result5[1].src = '/goc-cha-me';

              news.push(result5[0],result5[1]);
              console.log(news);
              t.setState({news: news})
            });
          });
        });
      });
    });
  }
  render(){
    const limitDescription = 100;
    const limitTitle = 50;
    const realNews = this.state.news.map(function(data,index){
      return(
        <div key={index} className="col-md-3 col-sm-6 new-item">
          <div className="thumbnails thumbnail-style thumbnail-kenburn">
            <div className="thumbnail-img">
              <div className="overflow-hidden">
                <div className="easy-bg-v2 rgba-default">New</div>
                <img className="img-responsive" src={data.url} alt={data.title} />
              </div>
              <Link to={`${data.src}/${data.key}`} className="btn-more hover-effect">Xem thêm +</Link>
            </div>
            <div className="caption">
              <h3><Link to={`${data.src}/${data.key}`} className="hover-effect">
                {
                data.title.length > 50 ? `${data.title.substr(0, limitTitle)}...` : `${data.title}`
              }
              </Link></h3>
            <p>
              {
                data.description.length >100 ? `${data.description.substr(0, limitDescription)}...` : `${data.description}`
            }
                </p>
            </div>
          </div>
        </div>
      )
    })
    return(
    <section className="section-3">
      <div className="container">
        <div className="headline">
          <Link to="/home" className="title-text"><h2>Thông tin mới nhất</h2></Link>
        </div>
        <div className="feature-new row">
            {realNews}
        </div>
      </div>
    </section>
    )
  }
}
