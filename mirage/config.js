import Mirage from 'ember-cli-mirage';


export default function() {

  
  // These comments are here to help you get started. Feel free to delete them.
  
    /*

  Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.get('/api/items', function () {
    return {
      data: [{
        type: 'item',
        attributes: {
          title: 'Title1',
          description: 'description 1',
          price: 10,
          stock: true
        },
        id: '1',
      }, {
        type: 'item',
        id: '2',
        attributes: {
          title: 'Title2',
          description: 'description 2',
          price: 20,
          stock: true
        }
      }, {
        type: 'item',
        id: '3',
        attributes: {
          title: 'Title3',
          description: 'description 3',
          price: 30,
          stock: false
        }
      }]
    };
  });

  function formEncodedToJson(encoded) {
    var result = {};
    encoded.split("&").forEach(function(part) {
      var item = part.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
  }

  this.post('/token', function(db, request){
    var params = formEncodedToJson(request.requestBody);
    
    console.log("Db", db, "request", request, "params", params);
    if(params.username === "user" && params.password === "user") {
      return {
        "access_token":"PA$$WORD",
        "token_type":"bearer"
      };
    }else{
      var body = { errors: 'Email or password is invalid' };
      return new Mirage.Response(401, {}, body);
    }})

}
