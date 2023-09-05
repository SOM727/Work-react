import React from 'react';
import { Nav } from "react-bootstrap";

const Diet1 = () => {
  return (
    <div>
      <div class="container">
        <div>
        <img
        width={500}
        src='https://static.toiimg.com/photo/msid-68126198/68126198.jpg'
        alt='img1'/>
        <Nav.Link href='./dietu'>
  <button class="btn btn1">Weight loss</button></Nav.Link>
  </div>
  <div>
  <img
      width={500}
  src='https://cdn.centr.com/content/18000/17194/images/landscapedesktop2x-eat-to-gain-weight-header-43.jpg'
  alt='img2'/>
  <Nav.Link href='./dieto'>
  <button class="btn btn2">Weight Gain</button></Nav.Link>
  </div></div>
</div>

    
  )
}

export default Diet1
