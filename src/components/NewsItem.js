import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
     let {title,description, imageUrl, newsUrl, author, date, source} = this.props; 
    return (
    <div className="my-3">
       <div className="card">
        <div style={{display: 'flex', justifyContent:'flex-end', position: 'absolute', right:'0'}}>

          <span className="badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}
              <span className="visually-hidden">unread messages</span>
          </span>
        </div>

          <img src={!imageUrl?"https://images.axios.com/82JFhUvJLzWBJGMcyBGe9oHtCAA=/0x0:1920x1080/1366x768/2019/12/11/1576086793119.jpg":imageUrl} 
          className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title} <span className="badge text-bg-success">New</span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-primary">By {!author?"UnKnown": author} on {new Date(date).toLocaleString("en-US", {timeZone: "America/New_York", dateStyle: "medium", timeStyle: "short"})}</small></p>
            <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
       </div>
    </div>

    );
  }
}

export default NewsItem
