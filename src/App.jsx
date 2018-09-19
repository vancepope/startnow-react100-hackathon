
import React, { Component } from 'react';
import axios from 'axios';
import SearchCard from './searchcard';
import Cards from './cards';
import DisplayGif from './displaygif';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      druid: [],
      hunter: [],
      mage: [],
      paladin: [],
      priest: [],
      rogue: [],
      shaman: [],
      warlock: [],
      warrior: [],
      hsGifs: [],
      isDruid: false,
      isHunter: false,
      isMage: false,
      isPaladin: false,
      isPriest: false,
      isRogue: false,
      isShaman: false,
      isWarlock: false,
      isWarrior: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.getDruidCards = this.getDruidCards.bind(this);
    this.getHunterCards = this.getHunterCards.bind(this);
    this.getMageCards = this.getMageCards.bind(this);
    this.getPaladinCards = this.getPaladinCards.bind(this);
    this.getPriestCards = this.getPriestCards.bind(this);
    this.getRogueCards = this.getRogueCards.bind(this);
    this.getShamanCards = this.getShamanCards.bind(this);
    this.getWarlockCards = this.getWarlockCards.bind(this);
    this.getWarriorCards = this.getWarriorCards.bind(this);
    this.getGifs = this.getGifs.bind(this);
    this.handleDruid = this.handleDruid.bind(this);
    this.handleHunter = this.handleHunter.bind(this);
    this.handleMage = this.handleMage.bind(this);
    this.handlePaladin = this.handlePaladin.bind(this);
    this.handlePriest = this.handlePriest.bind(this);
    this.handleRogue = this.handleRogue.bind(this);
    this.handleShaman = this.handleShaman.bind(this);
    this.handleWarlock = this.handleWarlock.bind(this);
    this.handleWarrior = this.handleWarrior.bind(this);
  }
  componentDidMount() {
    this.getGifs();
    this.getDruidCards();
    this.getHunterCards();
    this.getMageCards();
    this.getPaladinCards();
    this.getPriestCards();
    this.getRogueCards();
    this.getShamanCards();
    this.getWarlockCards();
    this.getWarriorCards();
    
    // axios
    // .get('https://omgvamp-hearthstone-v1.p.mashape.com/cards'
    // , { headers: { 'X-Mashape-Key': '64NNCPfrVUmsh2FyjPEtek12i8Xmp1cW4kkjsnGqQmJB24gzJK',
    //   'X-Mashape-Host': 'omgvamp-hearthstone-v1.p.mashape.com/cards' } })
    // .then(response => response.data)
    // .then((cards) => {
    //   const cardsArray = Object.values(cards);
    //   this.setState({
    //     hsCards: cardsArray,
    //   });
    // });
  }
  getGifs() {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=3eEQjeaxBAjI1bMHDPMSG5uwyDZmulRv&q=hearthstone&limit=3&offset=0&rating=G&lang=en';
    axios
    .get(url)
    .then(response => response.data)
    .then((gifs) => {
      this.setState({
        hsGifs: gifs.data
      });
    });
  }
  getDruidCards() {
    const url = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Druid';
    axios
    .get(url
    , { headers: { 'X-Mashape-Key': '64NNCPfrVUmsh2FyjPEtek12i8Xmp1cW4kkjsnGqQmJB24gzJK',
      'X-Mashape-Host': 'omgvamp-hearthstone-v1.p.mashape.com' } })
    .then(response => response.data)
    .then((cards) => {
      this.setState({
        druid: cards,
      });
    });
    return this.state.druid;
  }
  getHunterCards() {
    const url = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Hunter';
    axios
    .get(url
    , { headers: { 'X-Mashape-Key': '64NNCPfrVUmsh2FyjPEtek12i8Xmp1cW4kkjsnGqQmJB24gzJK',
      'X-Mashape-Host': 'omgvamp-hearthstone-v1.p.mashape.com' } })
    .then(response => response.data)
    .then((cards) => {
      this.setState({
        hunter: cards,
      });
    });
    return this.state.hunter;
  }
  getMageCards() {
    const url = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Mage';
    axios
    .get(url
    , { headers: { 'X-Mashape-Key': '64NNCPfrVUmsh2FyjPEtek12i8Xmp1cW4kkjsnGqQmJB24gzJK',
      'X-Mashape-Host': 'omgvamp-hearthstone-v1.p.mashape.com' } })
    .then(response => response.data)
    .then((cards) => {
      this.setState({
        mage: cards,
      });
    });
    return this.state.mage;
  }
  getPaladinCards() {
    const url = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Paladin';
    axios
    .get(url
    , { headers: { 'X-Mashape-Key': '64NNCPfrVUmsh2FyjPEtek12i8Xmp1cW4kkjsnGqQmJB24gzJK',
      'X-Mashape-Host': 'omgvamp-hearthstone-v1.p.mashape.com' } })
    .then(response => response.data)
    .then((cards) => {
      this.setState({
        paladin: cards,
      });
    });
    return this.state.paladin;
  }
  getPriestCards() {
    const url = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Priest';
    axios
    .get(url
    , { headers: { 'X-Mashape-Key': '64NNCPfrVUmsh2FyjPEtek12i8Xmp1cW4kkjsnGqQmJB24gzJK',
      'X-Mashape-Host': 'omgvamp-hearthstone-v1.p.mashape.com' } })
    .then(response => response.data)
    .then((cards) => {
      this.setState({
        priest: cards,
      });
    });
    return this.state.priest;
  }
  getRogueCards() {
    const url = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Rogue';
    axios
    .get(url
    , { headers: { 'X-Mashape-Key': '64NNCPfrVUmsh2FyjPEtek12i8Xmp1cW4kkjsnGqQmJB24gzJK',
      'X-Mashape-Host': 'omgvamp-hearthstone-v1.p.mashape.com' } })
    .then(response => response.data)
    .then((cards) => {
      this.setState({
        rogue: cards,
      });
    });
    return this.state.rogue;
  }
  getShamanCards() {
    const url = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Shaman';
    axios
    .get(url
    , { headers: { 'X-Mashape-Key': '64NNCPfrVUmsh2FyjPEtek12i8Xmp1cW4kkjsnGqQmJB24gzJK',
      'X-Mashape-Host': 'omgvamp-hearthstone-v1.p.mashape.com' } })
    .then(response => response.data)
    .then((cards) => {
      this.setState({
        shaman: cards,
      });
    });
    return this.state.shaman;
  }
  getWarlockCards() {
    const url = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Warlock';
    axios
    .get(url
    , { headers: { 'X-Mashape-Key': '64NNCPfrVUmsh2FyjPEtek12i8Xmp1cW4kkjsnGqQmJB24gzJK',
      'X-Mashape-Host': 'omgvamp-hearthstone-v1.p.mashape.com' } })
    .then(response => response.data)
    .then((cards) => {
      this.setState({
        warlock: cards,
      });
    });
    return this.state.warlock;
  }
  getWarriorCards() {
    const url = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Warrior';
    axios
    .get(url
    , { headers: { 'X-Mashape-Key': '64NNCPfrVUmsh2FyjPEtek12i8Xmp1cW4kkjsnGqQmJB24gzJK',
      'X-Mashape-Host': 'omgvamp-hearthstone-v1.p.mashape.com' } })
    .then(response => response.data)
    .then((cards) => {
      this.setState({
        warrior: cards,
      });
    });
    return this.state.warrior;
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleDruid() {
    this.setState({ isDruid: !this.state.isDruid });
  }
  handleHunter() {
    this.setState({ isHunter: !this.state.isHunter });
  }
  handleMage() {
    this.setState({ isMage: !this.state.isMage });
  }
  handlePaladin() {
    this.setState({ isPaladin: !this.state.isPaladin });
  }
  handlePriest() {
    this.setState({ isPriest: !this.state.isPriest });
  }
  handleRogue() {
    this.setState({ isRogue: !this.state.isRogue });
  }
  handleShaman() {
    this.setState({ isShaman: !this.state.isShaman });
  }
  handleWarlock() {
    this.setState({ isWarlock: !this.state.isWarlock });
  }
  handleWarrior() {
    this.setState({ isWarrior: !this.state.isWarrior });
  }
  render() {
    return (
      
      <div className='container'>
        <div className='page-header col-xl-12'>
          <img className='logo' src='./img/hslogo.png' alt='Hearthstone Logo' />
        </div>
        <br />
        <div className='row'>
          <div className='col-xl-12'>
            <DisplayGif hsGifs={ this.state.hsGifs } />
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-12'>
            <SearchCard
              handleChange={ this.handleChange }
              handleDruid={ this.handleDruid }
              handleHunter={ this.handleHunter }
              handleMage={ this.handleMage }
              handlePaladin={ this.handlePaladin }
              handlePriest={ this.handlePriest }
              handleRogue={ this.handleRogue }
              handleShaman={ this.handleShaman }
              handleWarlock={ this.handleWarlock }
              handleWarrior={ this.handleWarrior }
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-12'>
            <Cards
              druid={ this.state.druid }
              hunter={ this.state.hunter }
              mage={ this.state.mage }
              paladin={ this.state.paladin }
              priest={ this.state.priest }
              rogue={ this.state.rogue }
              shaman={ this.state.shaman }
              warlock={ this.state.warlock }
              warrior={ this.state.warrior }
              isDruid={ this.state.isDruid }
              isHunter={ this.state.isHunter }
              isMage={ this.state.isMage }
              isPaladin={ this.state.isPaladin }
              isPriest={ this.state.isPriest }
              isRogue={ this.state.isRogue }
              isShaman={ this.state.isShaman }
              isWarlock={ this.state.isWarlock }
              isWarrior={ this.state.isWarrior }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
