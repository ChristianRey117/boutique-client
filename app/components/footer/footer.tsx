
export default function Footer(){
    return (
        <footer className="bg-gray-800 text-center">
  <div className="container p-4 pb-0">
    <section className="mb-4">
      <a
      data-mdb-ripple-init
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: '#3b5998'}}
        href="#!"
        role="button"
        ><i className="bi bi-facebook"></i></a>


      <a
        data-mdb-ripple-init
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: '#ac2bac'}}
        href="#!"
        role="button"
        ><i className="bi bi-instagram"></i></a>

    
      <a
        data-mdb-ripple-init
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: '#333333'}}
        href="#!"
        role="button"
        ><i className="bi bi-github"></i></a>
    </section>
  </div>

  <div className="text-center p-3 bg-gray-900 text-white" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    © 2024 Copyright
  </div>
</footer>
    )
}