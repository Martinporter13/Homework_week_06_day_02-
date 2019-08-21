const Park = function (name, ticketPrice, dinosaur){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
  this.dinosaur = dinosaur;
};

Park.prototype.collectionOfDinosaurs = function(){
  return this.dinosaurs.length;
};

Park.prototype.addDinosaur = function(dinosaur4){
  return this.dinosaurs.push(dinosaur4);
};

Park.prototype.removeDinosaur = function(removedDinosaur){
  let foundDinosaur;

  for (let dinosaur of this.dinosaurs){
    if(dinosaur.species === removedDinosaur) {
      foundDinosaur = dinosaur;
    };
  };
  let index = this.dinosaurs.indexOf(foundDinosaur);

  this.dinosaurs.splice(index, 1);
};
Park.prototype.mostPopular = function(){
  let popularDinosaur = this.dinosaurs[0];

  for(dinosaur of this.dinosaurs){
    if(dinosaur.guestsAttractedPerDay >
      popularDinosaur.guestsAttractedPerDay){
        popularDinosaur = dinosaur;
      };
    }
    return popularDinosaur;
  };

  Park.prototype.findAllDinosaursOfaParticularSpecies = function(species){
    const foundSpecies = [];
    for (let dinosaur of this.dinosaurs){
      if (dinosaur.species === species){
        foundSpecies.push(dinosaur)
      }
    }
    return foundSpecies
  };

  Park.prototype.totalNumberOfVisitorsPerDay = function(){
    total = 0
    for(let dinosaur of this.dinosaurs){
      (total += dinosaur.guestsAttractedPerDay );
    };
    return total;
  };

  Park.prototype.totalNumberOfVisitorsPerYear = function(){
    total = 0
    for(let dinosaur of this.dinosaurs){
      (total += dinosaur.guestsAttractedPerDay );
    };
    return total * 365;

  };

  Park.prototype.totalRevenueFromTicketSalesForOneYear = function(){
    total = 0
    for(let dinosaur of this.dinosaurs){
      (total += dinosaur.guestsAttractedPerDay );
    };
    return total * 365  * 50;

  };




  
  module.exports = Park;
