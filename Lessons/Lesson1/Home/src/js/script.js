const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((employers) => {
  return employers.length > 0
});
employersNames = employersNames.map((item) => item.toLowerCase().trim());

const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

let { eu, eu: [firstName, secondName, thirdName], rus } = sponsors;

const money = sponsors.cash.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

function makeBusiness({
  owner = null,
  director = 'Victor',
  cash = null,
  emp = null
}) {
  const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
  console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
  console.log('And we have a sponsors: ');
  console.log(...sumSponsors);
  console.log(`Note. Be careful with ${firstName}. It's a huge risk.`);
}
//makeBusiness.apply(null, ['Sam', , money, employersNames]);

makeBusiness({
  owner: 'Sam',
  emp: employersNames,
  cash: money
});