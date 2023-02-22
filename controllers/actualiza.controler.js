import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]')

const obtenerInfo = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get('id');
  
  if(id === null){
    window.location.href = '../screens/error.html'
  }
  
  const name = document.querySelector('[data-nombre]');
  const mail = document.querySelector('[data-email]');
  try{
    const perfil = await clientServices.detalleCliente(id)
    
    name.value = perfil.nombre;
    mail.value = perfil.email;

  }catch(err){
    console.log('Catch Error - ', err);
  }
}
obtenerInfo();


formulario.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const url = new URL(window.location);
  const id = url.searchParams.get('id');

  const name = document.querySelector('[data-nombre]').value;
  const mail = document.querySelector('[data-email]').value;
  console.log(name, mail);
  clientServices.actualizarCliente(name,mail,id).then(()=>{
    window.location.href = '../screens/edicion_concluida.html'
  })
})