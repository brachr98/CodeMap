const tutorialSample = require('./tutorial.sample').tutorialSample;

export class TutorialService {

    public tutorials: any = tutorialSample;

    configTypeDefs() {
        let typeDefs = `
          type Tutorial {
            name: String,
            content: String,
            id: Int,
          } `;
        typeDefs += ` 
          extend type Query {
            tutorials: [Tutorial]
          }
        `;

        typeDefs += `
          extend type Mutation {
            tutorial(name:String, id:Int, content: String): Tutorial!
          }`;
        return typeDefs;
    }

    configResolvers(resolvers: any) {
        resolvers.Query.tutorials = () => {
            return this.tutorials;
        };
        resolvers.Mutation.tutorial = (_: any, product: any) => {
            this.tutorials.push(product);
            return product;
        };

    }

}
