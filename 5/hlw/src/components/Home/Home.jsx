import './Home.css'
const Home = (props) => {

    
    return (
        <div className='explore-style'>
             <h1>name : {props.name}</h1>
             <h3>Age : {props.age}</h3>
        </div>
    )
}
export default Home