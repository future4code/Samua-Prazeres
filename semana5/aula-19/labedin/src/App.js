import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemSamua from './imagens/samua.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemSamua}
          nome={"Samua Prazeres"}
          descricao={"Arquiteta e Urbanista buscando evoluir e recentemente se aventurando no mundo da programação. Adepta de soluções simples, que acredita na força da troca de ideias e da produção colaborativa. Buscando uma oportunidade que me possibilite contribuir ao molde do melhor ambiente construído possível, através da criação de uma arquitetura funcional e bela e superação os desafios que me esperam pela frente."}
        />
        
        <ImagemButton 
          imagem={"https://image.flaticon.com/icons/png/512/117/117472.png"} 
          texto={"Ver mais"}
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={"https://cdn.iconscout.com/icon/free/png-256/email-1818372-1541480.png"}
          descricao={"email: samua.np@email.com"}
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={"https://cdn.icon-icons.com/icons2/1489/PNG/512/locationmarker_102659.png"}
          descricao={"endereço: são paulo"}
        />
      </div>

      <div className="page-section-container">
        <h2>Formação Profissional</h2>
        <CardGrande 
          imagem={"https://yt3.ggpht.com/ytc/AAUvwnhKbubHEvUCTiZTjTbOfneyGUISEJsfnzpRV9CP=s900-c-k-c0x00ffffff-no-rj"} 
          nome={"Labenu"} 
          descricao={"Formanda em Web Dev Full Stack"} 
        />
        
        <CardGrande 
          imagem={"https://meuvestibular.com.br/wp-content/uploads/2020/03/ufpa-universidade-federal-do-para.png"}
          nome={"UFPA"} 
          descricao={"Formada em Arquitetura & Urbanismo"} 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem={"https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"} 
          texto={"Facebook"}
        />        

        <ImagemButton 
          imagem={"https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"} 
          texto={"Twitter"}
        />        
      </div>
    </div>
  );
}

export default App;
