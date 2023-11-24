
import 'bootstrap/dist/css/bootstrap.min.css'
function Landingpage () {
 
    return (
      <div className="App">
        <Routes>
       
<Route path='/products' element={<Productlist/>}/>
        
        </Routes>
      </div>
    );
  }
  
  export default Landingpage;


