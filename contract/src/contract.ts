import { NearBindgen, near, call, view, UnorderedMap, Vector } from 'near-sdk-js';


@NearBindgen({})
class HelloNear {
  featuresContract: Vector<string> = new Vector<string>('features', 0);

  @call({}) // This method changes the state, for which it cost gas
  buy_features({ greeting }: { greeting: string }): void {      
    // Record a log permanently to the blockchain!
    near.log(`buy ${greeting}`);
    var a = [];
    this.featuresContract.length
    this.featuresContract.push(greeting);
  }



  @call({}) // This method changes the state, for which it cost gas
  add_features({ greeting }: { greeting: string }): void {      
    // Record a log permanently to the blockchain!
    near.log(`Saving greeting ${greeting}`);
    this.featuresContract.push(greeting);
  }

  @view({}) 
  clear_features(): Number {
    this.featuresContract.clear();
    return this.featuresContract.length;
  }

  @view({}) 
  get_features(): string[] {
    var a = [];
    for (let i = 0; i < this.featuresContract.length; i++) {
      a.push(this.featuresContract.get(i));
      // event.emit
    }
    return a;
  }

}