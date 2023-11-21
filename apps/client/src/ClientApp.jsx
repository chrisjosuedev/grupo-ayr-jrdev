import { NavBar, Main, Footer } from "./components"
import { ClientModal } from "./components/ClientModal"

export const ClientApp = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-12">
            <h1>Clientes</h1>
            <p> <b> Gestión de Informacion de Clientes </b></p>
          </div>
          <hr />
        </div>
        <div className="row mt-2 mb-2">
          <Main />
        </div>
      </div>
      <ClientModal />
      <Footer />
    </>
  )
}

