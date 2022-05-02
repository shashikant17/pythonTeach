import { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Navbar/Nav';
import Footer from '../Footer/Footer';
import Compiler from './Compiler/Compiler';

class Home extends Component{
    render(){
        return(
            <div>
				<div className="App">
                    <Nav/>
                        <div className='container'>
                        
                        </div>
                    <Footer/>
				</div>
			</div>
        );
    }
}


export default Home;