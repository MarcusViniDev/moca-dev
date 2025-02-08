import api from "../../Services/api"
const Home = () => {
    
     const getMovies = async () =>{

        const data = await api.get ('/movie/popular')

        console.log (data)

    }

    getMovies ()

    return (
        
        <div>
            <h1>Home</h1>
            <p>estamos na Home</p>
        </div>
    )
}
export default Home