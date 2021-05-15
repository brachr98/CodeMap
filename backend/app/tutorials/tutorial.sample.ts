import {Tutorial} from './tutorial.model';

const tutorials: Array<Tutorial> = [];

tutorials.push(new Tutorial(1, 'Amazing Graphql Product', 'my product one description'))
tutorials.push(new Tutorial(2, 'Amazing second Graphql Product', 'My second simple Node.js API tutorial'))

exports.tutorialSample = tutorials;
