// export const getStaticPaths = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();

//     const paths = data.map(celeb => {
//         return {
//             params: {id: celeb.id.toString()}
//         }
//     })
//     return{
//         paths: [],
//         fallBack: false
//     }

// }

// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
//     const data = await res.json();

//     return {
//         props: { celeb: data }
//     }
// }

// const Details = ({ celeb }) => {
//   return (
//     <div>
//       <h1>Details</h1>
//       {/* <h1>{celeb.name}</h1> */}
//       {/* <h1>{celeb.email}</h1>
//       <h1>{celeb.website}</h1>
//       <h1>{celeb.address.city}</h1> */}
//     </div>
//   );
// }

// export default Details;

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(celeb => {
    return {
      params: { id: celeb.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { celeb: data }
  }
}

const Details = ({ celeb }) => {
  return (
    <div className="celeb-details">
      <h1>{ celeb.name }</h1>
      <h2>{ celeb.email }</h2>
      <p>{ celeb.website }</p>
      <p>{ celeb.address.city }</p>
    </div>
  );
}

export default Details;