const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('express-sequelize', 'root', '@$123456#@', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
})

// Associations - db'r table/model record er sathe r ekti table/model er record er modhye relationship association bole. ar ei association songthito hole ek model/table er record er kache reference hisebe r ekti table/model er record thakbe. ei reference ta identity hisebe kaj kore e ei identity ke foreign key bola hoy. ukto foreign key'r name ta customizable. eti ekti column hisebe add hoy jar value/data hisebe. ukto association ghote 3 ta tearms er opor base kore.

/*
1. one to one - kono table/model er record er sathe onyo ekti table/model er record er association. jmn - ekta shop product listing app er user r shop model/table ache. ekhon kotha holo jar shop ache se obosyoi ekjon user hobe. tar mane shop er record er sathe user er record er relation thakbe. jeti hobe one to one.
one to one relationship buildup korte proyojoniyo -

 a. hasOne() - ekti table/model er sathe relation establish korte help korbe ei method. ei method muloto source model er ekti method hisebe kaj kore, r 1st argument hisebe somporko korte chaoya model ke nei(eta ke target model bole). r 2nd argument hisebe object akare onk rokom options nei. hasOne() method er kache onk utility/ helper method ache jmn - get, set, create etc.

 b. belongsTo() - hasOne() method use kore je relation ta suru kora ba establsh kora hoyeche ta ke pakapokto ba ei je one to one relationship ke continue korar jonyo allow kore. ei method target model er method hisebe kaj kore r source model ke first argument hisebe nei. 2nd argument hisebe object akare onk options o niye thake.
 */

 /*const Country = sequelize.define('country', {
  countryName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
},{
  freezeTableName: true,
  timestamps: false
})

const Capital = sequelize.define('capital', {
  capitalName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
},{
  freezeTableName: true,
  timestamps: false
})*/

/*
Country.hasOne(Capital) // The Sequelize hasOne() association method is used to establish an association between two defined Sequelize models. The association method allows you to link two models so that you can retrieve data from both tables with one query execution.
Capital.belongsTo(Country) // The Sequelize belongsTo() method allows you to create a One-To-One (1:1) relationship between two Sequelize models. The method is called from a source model and pointed towards the model passed as its argument.
*/

// let country, capital;
// sequelize.sync({force: true, alter: true})
          /*.then(() => {
            let countries = [
              {
                countryName: 'Bangladesh'
              },
              {
                countryName: 'India'
              },
              {
                countryName: 'Australia'
              },
              {
                countryName: 'China'
              },
              {
                countryName: 'Spain'
              },
            ]

            let capitals = [
              {
                capitalName: 'Dhaka'
              },
              {
                capitalName: 'Delhi'
              },
              {
                capitalName: 'Sydni'
              },
              {
                capitalName: 'Beijing'
              },
              {
                capitalName: 'Madrid'
              },
            ]

            const all_country = Country.bulkCreate(countries)
            const all_capital = Capital.bulkCreate(capitals)
            return all_country, all_capital
          })
          .then(() => {
            return Capital.findOne({where: {capitalName: 'Beijing'}})
          })
          .then((data) => {
            capital = data 
            return Country.findOne({where: {countryName: 'China'}})
          })
          .then((data) => {
            country = data
            return country.setCapital(capital) // this method use for assign foreign key/referce key value in parent record row's column
          })
          .then((data) => {
            return country.getCapital() // this method use for getting child recorded row's data
          })
          .then((data) => {
            console.log(data.toJSON());
          })
          .catch( (err) => {
            console.log(err);
          })*/

          /*.then(() => {
            return Country.create({
              countryName: 'Spain'
            })
          })
          .then((data) => {
            country = data
            return country.createCapital({capitalName: 'Madrid'}) // ei method darao foreign key/ reference assign kora somvob
          })
          .then(data => {
            console.log(data.toJSON());
          })
          .catch(err => {
            console.log(err);
          })*/

          /*.then(() => {
            let countries = [
              {
                countryName: 'Australia'
              },
              {
                countryName: 'China'
              },
              {
                countryName: 'Spain'
              },
            ]

            let capitals = [
              {
                capitalName: 'Beijing'
              },
              {
                capitalName: 'Madrid'
              },
              {
                capitalName: 'Sydni'
              }
            ]

            const all_country = Country.bulkCreate(countries)
            const all_capital = Capital.bulkCreate(capitals)
            return all_country, all_capital
          })
          .then((data) => {
            return Country.findOne({where: {countryName: 'Australia'}})
          })
          .then((data) => {
            country = data
            return Capital.findOne({where: {capitalName: 'Sydni'}})
          })
          .then((data) => {
            capital = data
            return capital.setCountry(country)
          })
          .catch(err => {
            console.log(err);
          })*/

/*
2.one to many - kono table/model er record er sathe onyo ekti table/model er multiple record er association. jmn - ekta shop product listing app er shop, products model/table ache. ekhon ei shop model er ekta shop record er sathe products model/ table er onek gulo products er record er somporko thakbe.
one to many relationship buildup korte proyojoniyo -

 a. hasMany() - ekti table/model er sathe relation establish korte help korbe ei method. ei method muloto source model er ekti method hisebe kaj kore, r 1st argument hisebe somporko korte chaoya model ke nei(eta ke target model bole). r 2nd argument hisebe object akare onk rokom options nei. hasMany() method er kache onk utility/ helper method ache jmn - get, set, create, count, remove etc. hasMany() method e beshi ache hasOne() method er theke

 b. belongsTo() - hasMeany() method use kore je relation ta suru kora ba establsh kora hoyeche ta ke pakapokto ba ei je one to many relationship ke continue korar jonyo allow kore. ei method target model er method hisebe kaj kore r source model ke first argument hisebe nei. 2nd argument hisebe object akare onk options o niye thake.

 # many to one - one to many'r alternate. jemon - shop listing app - sekhane porudtcs, shop model ache. protita product record ekta shop er sathe associated.
*/
/*const Users = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
},{
  freezeTableName: true,
  timestamps: false
})

const Posts = sequelize.define('post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  publisher: {
    type: DataTypes.TEXT,
    allowNull: false
  }
},{
  freezeTableName: true,
  timestamps: false
})*/

/*Users.hasMany(Posts, {
  onDelete: 'CASCADE', // eta use korle model destroy method use korte hoy karon kono record delete korle ki hobe tar direction deoya hoy ekhane.
  onUpdate: 'CASCADE' // eta use korle model update method use korte hoy karon kono record update korle ki hobe tar direction deoya hoy ekhane.
});
Posts.belongsTo(Users);*/

// let user, post;

// sequelize.sync({force: true, alter: true})
          /*.then(() => {
            let users = [
              {
                name: 'John Doe'
              },
              {
                name: 'Nathan Leo'
              },
              {
                name: 'Sara Jaye'
              }
            ];

            let posts = [
              {
                title: 'A book & cook',
                description: 'A book is a medium for recording information in the form of writing or images.',
                publisher: 'Astha'
              },
              {
                title: 'A cook & fish',
                description: 'A cook is a medium for recording information in the form of writing or images.',
                publisher: 'Dikbijoy'
              },
              {
                title: 'War & peace',
                description: 'lorem ipsum dolor sit emet didn ko parik lolor itm emet',
                publisher: 'Astha'
              },
              {
                title: 'A crocodile tears',
                description: 'lisfhffe9ofkl;ddddddsfy lorem ispuj s',
                publisher: 'Dikbijoy'
              },
              {
                title: 'A monkey love',
                description: 'A monkeyis a medium for recording information in the form of writing or images.',
                publisher: 'Astha'
              },
              {
                title: 'A adventure love',
                description: 'lorem ipsum dolor sit emet didn ko parik lolor itm emet',
                publisher: 'Ononto'
              },
            ]

            const allUser = Users.bulkCreate(users);
            const allPost = Posts.bulkCreate(posts);
            return allUser, allPost
          })
          .then((data) => {
            return Users.findOne({where: {name: 'John Doe'}})
          })
          .then((data) => {
            user = data
            return Posts.findAll({where: {
              publisher: 'Astha'
            }})
          })
          .then((data) => {
            post = data
            return user.setPosts(post)
          })*/
          /*.then((data) => {
            return user.countPosts() // eta ekta helper method. table er kono ekti record onyo ekti table er kotogulo record er sathe associated ache ta jante help kore ei method. echarao aro onk helper method ache jemon - remove kora, create kora etc.
          })*/
          /*.then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          })*/

/*
3. many to many - ekti table/model er multiple record er sathe jokhon onyo ekti table/model er multiple record er sathe relation hobe. jemon - ekta online course application - sekhane student, courses model ache r student er modhye, Mr.A, Mr.B etc ache ebong course er modhye web development, d.m, graphic design ache. r Mr.A web + graphic e enroll koreche tar mane user table er Mr.A record ti courses model er web + graphic record er sathe associated tmny vabe courses model er web + graphic record Mr.A er sathe associated opr dike User model er Mr.B Web + Dm enroll koreche tar mane web kintu ekhane Mr.B er sathe associated r tar kintu multiple record er sathe somporko thakche. ebong 2 ta table er data gulo ke represent kore r ekti table ja ke join/junction table bole. 
many to many relationship buildup korte proyojon -

belongsToMany() - ekta ta table er modhyokar multiple record er sathe onyo ekti table er multiple record er modhye relation establish + allow korte use kora hoy ukto method. eti 2 ta model er modhyo songothito houyay ekbar source model er method hisebe kaj korbe ebong target model ke argument hisebe nibe thik porey source model target model hoye argument akare use hobe, r target model ti source model hisebe use hobe. echarao eti onek rokom option nei jemon represent kora hobe je table er madhyome seti define kora lage through option er madhome ebong tar value hobe represent table er name. kintu chaile junction table ke amra manually baniye through te assign korte pari. echara aro onek options ache. belongsToMany() onk rokom utility method provide kore jmn - get, set, count, remove etc.
*/

const Customer = sequelize.define('customer', {
  customerName: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
},{
  freezeTableName: true,
  timestamps: false
})

const Product = sequelize.define('product', {
  productName: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
},{
  freezeTableName: true,
  timestamps: false
})

//automatically create join/junction table
// Customer.belongsToMany(Product, {through: 'customer_products'});
// Product.belongsToMany(Customer, {through: 'customer_products'});

// manually created a junction table & assign table as through value
const Customer_Products = sequelize.define('customer_products', {
  customerProductId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
}, {
  freezeTableName: true,
  timestamps: false
})
Customer.belongsToMany(Product, {
  through: Customer_Products,
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE' // by default belongs to many method e onDelete, onUpdate er ekta term ache ta holo cascade.
});
Product.belongsToMany(Customer, {
  through: Customer_Products,
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

let customer, product;
sequelize.sync({force: true, alter: true})
          .then(() => {
            let customers = Customer.bulkCreate([
              {
                customerName: 'John Doe'
              },
              {
                customerName: 'Sarah Brown'
              },
              {
                customerName: 'Antony DeSuza'
              },
              {
                customerName: 'Leendi Jay'
              }
            ]);
            let products = Product.bulkCreate([
              {
                productName: 'Soap'
              },
              {
                productName: 'Shampoo'
              },
              {
                productName: 'Pant'
              },
              {
                productName: 'Shirt'
              },
              {
                productName: 'Cocacola'
              },
              {
                productName: 'kitkat'
              }
            ])
            return customers, products
          })
          /*.then((data) => {
            return Customer.findOne({where: { customerName: 'John Doe' }})
          })
          .then((data)=> {
            customer = data
            return Product.findAll()
          })
          .then((data) => {
            product = data
            customer.addProduct(product)
          })*/ // customer er sathe products association korlam. niche jetar kaj korechi ta holo products er sathe customer association
          .then((data) => {
            return Product.findOne({where: { productName: 'Kitkat' }})
          })
          .then((data)=> {
            product = data
            return Customer.findAll()
          })
          .then((data) => {
            customer = data
            product.addCustomer(customer)
          })
          .catch((err) => {
            console.log(err);
          })



/* 
  * hasOne - hasOne() amader ke special type method provide kore ja ke bola hoy helper method. jemon kono user er data set korte hobe amra likhtey pari setUser(), data pete hobe likhte pari getUser(). ebong eta obosyoi ekta parameter nibe data jekhan theke asbe. ebong eta valid.
  * BelongsTo - associated table/model ti kar theke belong kore eti bojhate use korte hoy. er kache get, set, create helper method ache.
  * HasMany - er kache get, set, create soho onek helper method ache. 
  * BelongsToMany - er kache get, set, create helper method ache.
*/  