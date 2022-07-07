import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
  const title = "La maison jungle"
  return (
    <div className="lmj-banner">
       <img src={logo} alt='La maison jungle' className='lmj-logo' />
      <h1 className="lmj-title">{title}</h1>,
    </div>
  )
}

// Autre manière de styler son composant
// function Banner() {
//   const title = "La maison jungle"
//   return (
//     <div style={{
//       color: 'black',
//       textAlign: 'right',
//       padding: 32,
//       borderBottom: 'solid 3px black'
//     }}>
//       <h1>{title}</h1>,
//     </div>
//   )
// }

export default Banner