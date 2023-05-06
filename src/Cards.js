import React from "react";
import './Cards.css';
function Cards(){
    return(
           <> <div className="cheeku"><h1>
            <p>
                Most Searched Genres
            </p>
           </h1>
           </div>
           
          <main className="page-content">
  <div className="card">
    <div className="content">
      <h2 className="title">New Releases</h2>
      <p className="copy">Check out all the books currently dominating the reading world</p>
      <button className="btn">View Books</button>
    </div>
  </div>
  <div className="card">
    <div className="content">
      <h2 className="title">Non-Fiction</h2>
      <p className="copy">Check out books on the most read genre these days</p>
      <button className="btn">View Books</button>
    </div>
  </div>
  <div className="card">
    <div className="content">
      <h2 className="title">Academics and Reference</h2>
      <p className="copy">Find academic books and clear your doubts</p>
      <button className="btn">View Books</button>
    </div>
  </div>
  <div className="card">
    <div className="content">
      <h2 className="title">Explore The Galaxy</h2>
      <p className="copy">Seriously, straight up, just blast off into outer space today</p>
      <button className="btn">Book Now</button>
    </div>
  </div>
</main>
           </>
    );
}
export default Cards;