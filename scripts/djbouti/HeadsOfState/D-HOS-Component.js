// Convert a raw data flower to an HTML representation of that flower
const SingleHosComponent = (headOfState) => {
    return `
        <section class="headsOfState">
        <ul>
          <li> Name: ${headOfState.name}</li>
          <li> Age: ${headOfState.age}</li>
          <li> Title: ${headOfState.title}</li>
        </ul>
        </section>
    `
}

export default SingleHosComponent