import React from 'react'
import './Section.css'

function Section() {
  return (
    <div>
      <section id='sponser'>
        <h2> Our sponser</h2>
        <div className="row">
            <div className='col simage'> <img src="https://1000logos.net/wp-content/uploads/2021/04/Uber-Eats-logo-500x281.png" alt=''/></div>
            <div className='col simage'> <img src="https://1000logos.net/wp-content/uploads/2021/06/Slack-logo-500x281.png" alt=''/></div>
            <div className='col simage'> <img src="https://1000logos.net/wp-content/uploads/2017/04/Microsoft-Logo-500x163.png" alt=''/></div>
            <div className='col simage'> <img src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.6435-9/68598219_100242081347259_7112792371359645696_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=94oQ9udFNfcAX_35tlY&_nc_ht=scontent.fadd1-1.fna&oh=00_AfCL0u9J7jVFWnqBmeK0au5KzJ6bgRVvxoAGIkVXUoJ2qg&oe=6610C976" alt=''/></div>
        </div>
      </section>
      <section id='about'>
        <div className='about--text'>
            <h2>About Us</h2>
            <p>AE Furnishers is your destination for high-quality furniture. Established in 1990, we’re passionate about transforming spaces with our meticulously crafted pieces. Our diverse collection caters to all styles and budgets. Feel free to explore and reach out with any queries.</p>
        </div>
        <div className='about--pic'>
            <img className='bottom' src='https://m.media-amazon.com/images/I/61cefoSfepS.jpg' alt=''/>
            <img className='top' src='https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg' alt=''/>
        </div>
      </section>
      <section id='why'>
        <h2>Why choose us?</h2>
        <p>People choose us for our unwavering commitment to quality, our diverse collection that caters to all tastes, and our passion for transforming spaces into comfortable and stylish havens.</p>
        <div className="row">
            <div className='col'>
            <i class="fa-solid fa-star"></i>
                <h3>Quality</h3>
                <p>Here, we never compromise on quality. Our furniture is crafted with meticulous attention to detail, ensuring each piece meets the highest standards.</p>
                <button>More</button>
            </div>
            <div className='col'>
            <i class="fa-solid fa-shield"></i>
                <h3>Longevity</h3>
                <p>Our products are designed to last. We use durable materials and robust construction techniques to ensure our furniture stands the test of time.</p>
                <button>More</button>
            </div>
            <div className='col'>
            <i class="fa-solid fa-users"></i>
                <h3>Community</h3>
                <p>We believe in the power of community. That’s why we’re committed to giving back, supporting local artisans, and fostering sustainable practices in all we do.</p>
                <button>More</button>
            </div>
        </div>
      </section>
      <section id='product'>
        <h2>Our products</h2>
        <p>We offer a wide range of furniture products designed to enhance your living spaces. Our collection includes everything from sofas and dining sets to office furniture and outdoor pieces. Each product is crafted with care, ensuring quality and longevity. Explore our range to find the perfect pieces for your home or office.</p>
        <div className='row'>
            <div className='col'><div className="card" >
  <img src="https://i.pinimg.com/736x/2a/68/8c/2a688c9e71b3991bba32509abac5c197.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Office Table <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> </h5>
    <div className="price d-flex justify-content-between">
        <p >Price</p>
        <p>100$</p>
    </div>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Buy Now</a>
  </div>
</div></div>
            <div className='col'><div className="card" >
  <img src="https://img.freepik.com/free-psd/comfortable-modern-chair-isolated_176382-1216.jpg?t=st=1709799361~exp=1709802961~hmac=9349732dddb70799ff59b87b4fb42080f3110ed26206f41c5f316aa8d7092a5c&w=740" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Sofa <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i>  <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i></h5>
    <div className="price d-flex justify-content-between">
        <p >Price</p>
        <p>100$</p>
    </div>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Buy Now</a>
  </div>
</div></div>
        </div>
      </section>
      <section id='testimonial'>
        <h2>Our Happy clients</h2>
        <p>this are the happiest client</p>
        <div className="row">
            <div className='col'>
            <i class="fa-solid fa-quote-left"></i>
                <p>
                I’ve purchased several pieces from AE Furnishers and each time I’m amazed at the quality and craftsmanship. The furniture is not only beautiful but also built to last. Highly recommended!
                </p>
                <div className='name'>
                    <img className='user' src='data:image/jpeg;base64,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' alt=''/>
                    <div class="uset--text">
                    <p>Cynitia Adam</p>
                    <p>Architect</p>
                    <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                </div>
            </div>
            <div className='col'>
            <i class="fa-solid fa-quote-left"></i>
                <p>
                The customer service at AE furnishers is top-notch. They helped me choose the perfect dining set for my home. It’s been a year and the furniture still looks as good as new.
                </p>
                <div className='name'>
                <img className='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&usqp=CAU' alt=''/>
                <div class="uset--text">
                    <p>Cynitia Adam</p>
                    <p>Interior Designer</p>
                    <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
            </div>
            <div className='col'>
            <i class="fa-solid fa-quote-left"></i>
                <p>
                I love the variety of styles at [Your Company Name]. I was able to find unique pieces that perfectly fit my home’s aesthetic. Plus, their commitment to sustainability is something I truly appreciate.
                </p>
                <div className='name'>
                <img className='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&usqp=CAU' alt=''/>
                <div class="uset--text">
                    <p>Cynitia Adam</p>
                    <p>Business Owner</p>
                    <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </section>
      <section id='join'>
        <h2>Join with us</h2>
        <p>Become a part of the AE Furnishers family today! Sign up to receive exclusive updates on our latest collections, special offers, and design inspirations. Plus, enjoy a seamless shopping experience with personalized recommendations. Don’t miss out, join us now!</p>
        <div className="row">
            <div className='col join-pic-div'>
                <div className='join-pic'><img src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129803.jpg?t=st=1709799031~exp=1709802631~hmac=25b42f8e6aef0a4df9dad30ab56a6161f9cfc0c8953007b055f0d1e5414241ac&w=740" alt=''/></div>
            </div>
            <div className='col  join-text'>
                <input placeholder='Email' type='email' className='d-block mb-4'></input>
                <input placeholder='Password' type='email' className='mb-4'></input>
                <button className='d-block'>Sign up</button>
            
            </div>
        </div>
      </section>
    </div>
  )
}

export default Section
