import React from 'react'
import './Login.css'
import Image from '../images/img2.jpg'
import LogoFacebook from '../images/facebook .png'
import LogoGoogle from '../images/google.png'

export const Login = () => {
  return (

    <>

   

        <section>
            
             <div className="contentBx">
                 <div className="formBx">
                     <h2>¡Ingresa a tu cuenta!</h2>
                     <form>
                        <button className="facebook-button"><img src={LogoFacebook} alt="x" />  Iniciar con Facebook</button>
                        <button className="google-button"><img src={LogoGoogle} alt="x" /> Iniciar con Google </button>
                          <div className="inputBx">
                             <span>Correo electrónico</span>
                             <input type="email" name="" placeholder="Tu_correo@gmail.com"/>
                         </div>
                         <div className="inputBx">
                            <span>Contraseña</span>
                            <input type="password" name=" "placeholder="Tu_contraseña*"/>
                        </div> 
                        
                        <div className="inputBx-iniciar">
                            <button type="submit" name="" >Iniciar sesión</button>
                        </div>
                        <div className="inputBx-crear">
                            <button type="submit" name="" >Crea usuario</button>
                        </div>
                        <div className="inputBx">
                            <p>No recuerdas tu contraseña?<a href="#"> Olvide contraseña </a> </p>
                        </div>
                     </form>
                 </div>
            </div>
            <div className="imgBx">
                <img src={Image}/>
            </div>  
        </section>

    </>
   
  )
}
