import Texto from '../Texto/Texto';
import Button from '../Button/Button';
import './App.css';

 const App = () => {
     return(
        <main className='containerMain'>
            <div className='containerCard'>
                <Texto
                titulo="Learn to code by" 
                titulo2="Watching others" 
                texto1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dicta expedita doloremque velit fuga repudiandae officiis dolorum, excepturi perferendis omnis eaque repellendus incidunt tempore perspiciatis cumque ipsum vitae dolorem quas."
                texto2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dicta expedita doloremque velit fuga repudiandae officiis dolorum, excepturi perferendis omnis eaque repellendus incidunt tempore perspiciatis cumque ipsum vitae dolorem quas." 
                />
                 <div className='containerA'>
                 <h4>Try it free 7 days then $20/mo.thereafter</h4>
                    <input type="text" placeholder='Firest Name' />
                    <input type="text" placeholder='Last Name' />
                    <input type="email" placeholder='Email Addrens' />
                    <input type="password" placeholder='Email Addrens' />
                    <Button text="CLAIM YOUR FREE TRIAL" />
                 </div>
            </div>
        </main>
     )
 }
  export default App;