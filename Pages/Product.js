import './Product.css';


function Product() {
    return (
        <>
        <div className='flex-1'>
                <div class="card">
    <div class="card-image"><img className='img-1' src={require('./cout.jpg')} alt=""/> </div>
    <div class="category"> Men's coats </div>
    <div class="heading"> A heading that must span over two lines
        <div class="author"> Price: 100$</div>
    </div>
</div>

<div class="card">
    <div class="card-image"><img className='img-1' src={require('./blizer.jpg')} alt=""/></div>
    <div class="category"> Men's blazer </div>
    <div class="heading"> A heading that must span over two lines
        <div class="author">  Price:500$</div>
    </div>
</div>

<div class="card">
    <div class="card-image"><img className='img-1' src={require('./zar1.avif')} alt=""/></div>
    <div class="category"> Men's T-shirt </div>
    <div class="heading"> A heading that must span over two lines
        <div class="author"> Price: 50$</div>
    </div>
</div>
</div>

<div className='flex-1'>
                <div class="card">
    <div class="card-image"><img className='img-1' src={require('./zara2.jpg')} alt=""/></div>
    <div class="category"> Men's pants </div>
    <div class="heading"> A heading that must span over two lines
        <div class="author">  Price: 60$</div>
    </div>
</div>

<div class="card">
    <div class="card-image"><img className='img-1' src={require('./zara3.jpg')} alt=""/></div>
    <div class="category"> Men's SweatT-shirt </div>
    <div class="heading"> A heading that must span over two lines
        <div class="author">  Price: 70$</div>
    </div>
</div>

<div class="card">
    <div class="card-image"><img className='img-1' src={require('./zara6.jpg')} alt=""/></div>
    <div class="category"> Men's Pants </div>
    <div class="heading"> A heading that must span over two lines
        <div class="author"> Price: 40$</div>
    </div>
</div>
</div>

<div className='flex-1'>
                <div class="card">
    <div class="card-image"><img className='img-1' src={require('./zara7.jpg')} alt=""/></div>
    <div class="category"> Men's T-shirt </div>
    <div class="heading"> A heading that must span over two lines
        <div class="author"> Price: 82$</div>
    </div>
</div>

<div class="card">
    <div class="card-image"><img className='img-1' src={require('./zara8.jpg')} alt=""/></div>
    <div class="category"> Men's  Formal Pants </div>
    <div class="heading"> A heading that must span over two lines
        <div class="author"> Price: 10$</div>
    </div>
</div>

<div class="card">
    <div class="card-image"><img className='img-1' src={require('./zara9.jpg')} alt=""/></div>
    <div class="category"> Men's Comfort Pants </div>
    <div class="heading"> A heading that must span over two lines
        <div class="author"> Price: 60$</div>
    </div>
</div>
</div>

        </>
    );
}
export default Product;