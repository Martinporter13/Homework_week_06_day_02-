const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  beforeEach(function () {
    dinosaur1 = new Dinosaur('T-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Pterodactyl', 'omnivore', 40);
    dinosaur3 = new Dinosaur('Brontosaurus', 'herbivore', 30);
    dinosaur4 = new Dinosaur('Jimbilaurus', 'omnivore', 100)




    park = new Park('Jurrasic Park', 50);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurrasic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs();
    assert.deepStrictEqual(actual, 0);
  });


  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur4)
    const actual = park.collectionOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1])
  });


  it('should be able to find the dinosaur that attracts the most visitors',
  function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4);
  const actual = park.mostPopular();
  assert.deepStrictEqual(actual, dinosaur4);

  });



  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.findAllDinosaursOfaParticularSpecies('T-rex');
    assert.deepStrictEqual(actual, [dinosaur1])

  });
   it('should be able to calculate the total number of visitors per day',
   function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.totalNumberOfVisitorsPerDay();
    assert.strictEqual(actual, 220);
  });

   it('should be able to calculate the total number of visitors per year',
   function(){
     park.addDinosaur(dinosaur1);
     park.addDinosaur(dinosaur2);
     park.addDinosaur(dinosaur3);
     park.addDinosaur(dinosaur4);
     const actual = park.totalNumberOfVisitorsPerYear();
     assert.strictEqual(actual, 80300);

 });

   it('should be able to calculate the total revenue from ticket sales per one year', function(){
     park.addDinosaur(dinosaur1);
     park.addDinosaur(dinosaur2);
     park.addDinosaur(dinosaur3);
     park.addDinosaur(dinosaur4);
      const actual = park.totalRevenueFromTicketSalesForOneYear();
      assert.strictEqual(actual, 4015000);
    });



});
