import React ,{useState} from 'react'

import "./Header.css"
import { Link } from 'react-router-dom';
import user from "../../images/user.png"
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movie/movieSlice';

 const Header = () => {


  


 const [term ,setTerm] = useState("");
 const dispatch =useDispatch();

 const submitHandler = (e) =>{
   e.preventDefault();
    console.log(term);
  dispatch(fetchAsyncMovies(term));
  dispatch(fetchAsyncShows(term));
  setTerm("");
  // clear the search bar after .......
 };

 

  return (
    <div className='header'>
      <Link to="/">
      <div className='logo'>Movie app</div> 
      </Link>


      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input  type="text" value={term} placeholder=" Search" onChange={ (e)=> setTerm(e.target.value)} />
          <button type="submit"> Search</button>
        </form>
      </div>


      <div className='user-image'>
        <img src={user}  alt="user"/> 
      </div>
    </div>
  )
}
export default Header;