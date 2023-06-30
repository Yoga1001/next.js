import '@/styles/globals.css'
import '@/styles/tampilan.css'
import FormMahasiswa from './forminputmahasiswa';

export default function ProfileForm() {
  return (
   
    <FormMahasiswa />

    )
 
}

 //import Profile from './profile'
// const person = {
//   name: 'Gregorio Y. Zara',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// const mahasiswa = {
//   nama: 'Christian Bayu',
//   theme: {
//     backgroundColor: 'green',
//     color: 'white'
//   }
// }

// export default function TodoList() {
//   return (
//     <div style={mahasiswa.theme}>
//       <h1>{mahasiswa.nama}'s Todos</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
    
//   );
// }

// import { getImageUrl } from './utils'

// export default function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={400}
//         person={{
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//     </Card>
//   );
// }

// function Avatar({ person, size }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person,"l")}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// function Card({ children }) {
//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }


