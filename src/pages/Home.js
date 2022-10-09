import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../index.css";
import cicek from "../img/cicek-sepeti.png";
import vestel from "../img/vestel.png";
import react from "../img/react-simple-projects.png";
import js from "../img/js-101.png";
import card from "../img/card.png";
import redux from "../img/redux-api.png";
import vanilla from "../img/vanilla.png";
import template from "../img/template.png";
import Intro from "../components/Intro";
function Home() {
  return (
    <>
      <Navbar />
      <Intro/>
      <div className="container mt-5" id="projects">
        <div className="row">
          <div className="col">
            <h2 className="text-center">Projects</h2>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-5">
            <Card
              img={vestel}
              title="Vestel Clone"
              description="Verilen Api ile Vestel Clone yapılması amaçlanmıştır"
              link="https://github.com/clkaley/vestel-clone"
            />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3  mt-5">
            <Card
              img={js}
              title="Javascript 101"
              description="Bu repo js öğrenirken ve öğrenmek isteyenlere küçük çaplı projeleri içeren repodur"
              link="https://github.com/clkaley/javascript-101"
            />
          </div>
          <div className=" col-sm-6 col-lg-4 col-xl-3 mt-5">
            <Card
              img={react}
              title="React Simple Projects"
              description="Bu repo react öğrenirken yapılan küçük çaplı projeleri içermektedir "
              link="https://github.com/clkaley/react-simple-projects"
            />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mt-5">
            <Card
              img={cicek}
              title="Çiçek Sepeti"
              description="HTML, CSS, Bootstrap ve JS kullanılarak oluşturulmuştur."
              link="https://github.com/clkaley/cicek-sepeti"
            />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mt-5">
            <Card
              img={card}
              title="CSS Cards"
              description="Sitelerde kullanılmak üzere animasyon içerikli card yapıları oluşturuldu"
              link="https://github.com/clkaley/css-cards"
            />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mt-5">
            <Card
              img={redux}
              title="Redux Api"
              description="Reduxta bulunan createAsyncThunk yapısı kullanılarak fetch işleminin yapıldığı repo "
              link="https://github.com/clkaley/react-simple-projects/tree/main/redux-api"
            />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mt-5">
            <Card
              img={vanilla}
              title="Vanilla JS Projects"
              description="JS öğrenirken yapılan temel projelerin olduğu repo "
              link="https://github.com/clkaley/vanilla-javascript-projects"
            />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mt-5">
            <Card
              img={template}
              title="Bootstrap Template"
              description="Bootstrap kullanılarak oluşturulan template projeler"
              link="https://github.com/clkaley/bootstrap-template"
            />
          </div>
        </div>
      </div>
    

      <div className="container text-center mt-5 " id="social">
        <div className="row ">
          <div className="col mt-5">
            <h2 className="mt-5">Social Accounts</h2>
          </div>
        </div>

        <div className="row mt-3 ">
          <div className="col-md-4 ">
            <a
              className="social-icons"
              href="https://www.linkedin.com/in/aleynacelik/"
            >
              <i className="fa-brands fa-linkedin-in fa-2x"></i>
            </a>
          </div>
          <div className="col-md-4 ">
            <a className="social-icons" href=" https://github.com/clkaley">
              <i className="fa-brands fa-github fa-2x"></i>
            </a>
          </div>
          <div className="col-md-4 ">
            <a className="social-icons" href="mailto:clkkaley@gmail.com">
              <i className="fa-sharp fa-solid fa-envelope-open fa-2x"></i>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
