// Slider.jsx
import { IonIcon } from '@ionic/react';
import './CSS/ImageSlider.css'

const ImageSlider = () => {
  return (
    <main>
      <ul className='slider'>
        {/* List item 1 */}
        <li className='item' style={{backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')"}}>
          <div className='content'>
            <h2 className='title'>Lossless Youths</h2>
            <p className='description'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.  </p>
            <button>Read More</button>
          </div>
        </li>

        {/* List item 2 */}
        <li className='item' style={{backgroundImage: "url('https://i.redd.it/tc0aqpv92pn21.jpg')"}}>
          <div className='content'>
            <h2 className='title'>Estrange Bond</h2>
            <p className='description'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.  </p>
            <button>Read More</button>
          </div>
        </li>

        {/* Repeat for other list items */}
        {/* List item 3 */}
        <li className='item' style={{backgroundImage: "url('https://wharferj.files.wordpress.com/2015/11/bio_north.jpg')"}}>
          <div className='content'>
            <h2 className='title'>The Gate Keeper</h2>
            <p className='description'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.  </p>
            <button>Read More</button>
          </div>
        </li>

        {/* List item 4 */}
        <li className='item' style={{backgroundImage: "url('https://images7.alphacoders.com/878/878663.jpg')"}}>
          <div className='content'>
            <h2 className='title'>Last Trace Of Us</h2>
            <p className='description'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>

        {/* Repeat for other list items */}
        {/* List item 5 */}
        <li className='item' style={{backgroundImage: "url('https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg')"}}>
          <div className='content'>
            <h2 className='title'>Urban Decay</h2>
            <p className='description'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>

        {/* List item 6 */}
        <li className='item' style={{backgroundImage: "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')"}}>
          <div className='content'>
            <h2 className='title'>The Migration</h2>
            <p className='description'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.  </p>
            <button>Read More</button>
          </div>
        </li>
      </ul>

      <nav className='nav'>
        <IonIcon className='btn prev' name="arrow-back-outline"></IonIcon>
        <IonIcon className='btn next' name="arrow-forward-outline"></IonIcon>
      </nav>
    </main>
  );
};

export default ImageSlider;
