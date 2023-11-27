import { Navbar, Features, Download, Subscribe, Faq, Footer, Header } from "../components"


function Nav() {
    return (
        <div>
            <header className="header-bg">
                <Navbar />
                <Header />
            </header>
            <Features />
            <Download />
            <Subscribe />
            <Faq />
            <Footer />

        </div>
    )

}
export default Nav;