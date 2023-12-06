import React from 'react'
import "./Register.css"
function Register() {
  return (
    <div>

<form>
  {/* encontrado en: 
http://designify.me/tutorials/how-to-create-a-beautiful-material-design-login-form-with-html-css/#.WUS9lX6GO00 
Creditos al sitio n.n
*/}
  <h1>Registrar nueva cuenta</h1>
  <input placeholder="Correo electronico" type="text" required="" />
  <input placeholder="Contraseña" type="password" required="" />
  <button>Registrar</button>
</form>

    </div>
  )
}

export default Register