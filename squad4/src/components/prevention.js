import React, { Component } from 'react';
import cought from '../img/cough.svg';
import distance from '../img/distance.svg';
import elbow from '../img/elbow.svg';
import handWash from '../img/hand-wash.svg';
import smartphone from '../img/smartphone.svg';
import stayHome from '../img/stay-home.svg';
import window from '../img/window.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../prevention.css';
class Prevention extends Component {
  render() {
    return (
      <div className="container-fluid">
        <section className="about">
          <div className="titulo-container">
            <h2 className="title">1. Higiene das mãos</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-3 divimg">
              <img className="img" src={handWash} alt="" />
            </div>
            <div className="col-lg-8 col-sm-11 col-11 text-container">
              <p className="texto">Para evitar a proliferação do vírus, o Ministério da Saúde recomenda medidas básicas de higiene como lavar
                bem as mãos (dedos, unhas, punho, palma e dorso) com água e sabão, e, de preferência, utilizar toalhas de
                papel para secá-las.
            Além do sabão, outro produto indicado para higienizar as mãos é o álcool gel 70%.</p>
              <a className="texto" rel='noopener noreferrer' target="_blank" href="https://www.youtube.com/watch?v=pt_zybIl7M4">Video</a>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="titulo-container">
            <h2 className="title">2. Contaminação pelo ar</h2>
          </div>
          <div className="row justify-content-center texto">
            <div className=" col-3 divimg">
              <img className="img" src={cought} alt="" />
            </div>
            <div className="col-lg-8 col-sm-11 col-11 text-container">
              <p>Ao tossir ou espirrar, cubra sua boca e nariz com um pano ou papel para impedir que as secreções contaminem
                outras pessoas. Certifique que o que usou seja jogado fora (de preferência) ou esterilizado.
                Se você não tiver algo à disposição, procure tossir ou espirrar em seu antebraço e não em suas mãos;
                Não contenha a tosse pois apesar de ser irritante e desconfortável em alguns momentos ela é uma forma eficaz
            de eliminar secreções e ajuda o corpo a se proteger ou a sarar de algum problema.</p>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="titulo-container">
            <h2 className="title">3. Contaminação indireta com o uso de objetos</h2>
          </div>
          <div className="row justify-content-center texto">
            <div className=" col-3">
              <img className="img" src={smartphone} alt="" />
            </div>
            <div className="col-lg-8 col-sm-11 col-11 text-container">
              <p>Não compartilhar objetos - de uso pessoal como talheres, pratos, copos ou garrafas.
                Muitas pessoas pensam que não há problema em dividir objetos pessoais, como um copo ou uma garrafinha de
                água. Entretanto, vários
                problemas de saúde podem ser desencadeados por esse simples gesto, inclusive a covid-19, como está dito
            neste artigo.</p>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="titulo-container">
            <h2 className="title">4. Distância de segurança</h2>
          </div>
          <div className="row justify-content-center texto">
            <div className=" col-3">
              <img className="img" src={distance} alt="" />
            </div>
            <div className="col-lg-8 col-sm-11 col-11 text-container">
              <p>Manter distância mínima - Caso seja necessário frequentar ambientes fechados com agloração de pessoas é
                importante seguir as
                regras de afastamento social. Mantendo uma distância mínima de 2 metros entre as pessoas. Alguns
                supermercados já estão ajudando
            seus clientes colando fitas de instrução no chão a distância sugerida.</p>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="titulo-container">
            <h2 className="title">5. Contágio direto</h2>
          </div>
          <div className="row justify-content-center texto">
            <div className=" col-3">
              <img className="img" src={elbow} alt="" />
            </div>
            <div className="col-lg-8 col-sm-11 col-11 text-container">
              <p>Evitar o contato pessoal - evitar apertos de mãos, abraços ou beijos com pessoas, mesmo que assintomáticas,
                é uma medida que ajuda a
            reduzir a propagação do vírus.</p>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="titulo-container">
            <h2 className="title">6. Ventilação do ambiente</h2>
          </div>
          <div className="row justify-content-center texto">
            <div className=" col-3">
              <img className="img" src={window} alt="" />
            </div>
            <div className="col-lg-8 col-sm-11 col-11 text-container">
              <p>Uma boa maneira de prevenir é manter janelas abertas para garantir uma melhor ventilação dos cômodos, uma
                vez que o coronavírus pode
            se espalhar com mais facilidade em ambientes fechados e com muitas pessoas.</p>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="titulo-container">
            <h2 className="title">7. Isolamento social</h2>
          </div>
          <div className="row justify-content-center texto">
            <div className=" col-3">
              <img className="img" src={stayHome} alt="" />
            </div>
            <div className="col-lg-8 col-sm-11 col-11 text-container">
              <p> Isso não significa ficar 100% recluso em casa: as saídas
                para ir ao mercado ou à farmácia podem ocorrer, desde que em menor frequência e seguidas de boa higiene das
                mãos. Alguns estados já
                determinaram a quarentena das atividades e o tráfego de pessoas. No caso de idosos ou pessoas que já tenham
                a imunidade comprometida,
                a orientação é fazer de tudo para não sair. Pelo menos na fase de pico da epidemia.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
};
export default Prevention;