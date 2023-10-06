import perfil from "../../assets/perfil.png"
import ProgressBar from 'react-bootstrap/ProgressBar'

function Home() {
    return (
        <>
            <section className="container mt-5 d-flex gap-5 w-100">
                <div className="d-flex justify-content-center mt-5">
                    <img src={perfil} alt="" />
                </div>
                <div className="conteudo mt-5">
                    <h2>Olá, meu nome é Sergio</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Pariatur dolores atque cum, illum quis soluta. Molestiae et blanditiis,
                        illo sed doloribus inventore pariatur a, quam quia, odio obcaecati sequi ipsum.</p>
                    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Formação Academica</button>

                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Formação Academica</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul>
                                <li>TADS - IFMS</li>
                                <ul>Futuro Obejtivo</ul>
                                <li>Técnico em Informatica</li>
                                <ul>2021 - Cursando</ul>
                            </ul>
                        </div>
                    </div>
                        <div className="mt-3">
                            <h5>FrontEnd</h5>
                            <ProgressBar animated now={60} />
                        </div>
                        <div className="mt-3">
                            <h5>Backend</h5>
                            <ProgressBar animated now={10} />
                        </div>
                        <div className="mt-3">
                            <h5>Mobile</h5>
                            <ProgressBar animated now={5} />
                        </div>
                        <div className="d-flex gap-4 mt-5 justify-content-center h1">
                            <i class='bx bxl-react'></i>
                            <i class='bx bxl-typescript' ></i>
                            <i class='bx bxl-html5' ></i>
                            <i class='bx bxl-css3' ></i>
                            <i class='bx bxl-javascript' ></i>
                            <i class='bx bxl-python' ></i>
                        </div>
                </div>
            </section>
        </>
    )
}

export default Home