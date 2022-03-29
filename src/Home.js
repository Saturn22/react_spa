import React, { Component } from "react";
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>ART GALLERY</h2>
                <p>Cras facilisis urna ornare ex volutpat, et
                    convallis erat elementum. Ut aliquam, ipsum vitae
                    gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                    metus nec massa. Maecenas hendrerit laoreet augue
                    nec molestie. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.</p>

                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>

                <div class="row">
                    <div class="column">
                        <img src={img1} alt="something" width="400" height="333"/>
                    </div>
                    <div className="column">
                        <img src={img2} alt="something" width="400" height="333"/>
                    </div>
                    <div className="column">
                        <img src={img3} alt="something" width="400" height="333"/>
                    </div>
                </div>

                <p>Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <p>Ut Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:erat elementum. Maecenas hendrerit laoreet a Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget rhoncus nibh metus nec massa. Cum sociis natoque penatibus et magnis dis  hendrerit laoreet augue nec molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

            </div>
        );
    }
}

export default Home;
