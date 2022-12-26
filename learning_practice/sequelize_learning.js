/*const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('express-sequelize', 'root', '@$123456#@', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
})*/

/*const sequelize = new Sequelize('express-sequelize', 'root', '@$123456#@', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  define: {
    freezeTableName: true // amra databse connection configuration er ei option define korte pari fole sequelize er sokol instance er sathe globally kaj korbe tokhon model creae korar somoy bole deoya lagbe na. 
  }
})*/

// we can use then()...catch() block or try..catch() with async await -- following method use for establish db connection with project.

// then()...catch()
/*sequelize.authenticate()
          .then(() => {
            console.log('Database connected succesfully');
          })
          .catch(err => {
            console.log(`Database not connected - ${err}`);
          })*/

// async await try.. catch
/*async function connection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connection()*/

// create model -- using .define() function

const User = sequelize.define('user', {
  // we can set cutom id name & id number as our wish
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
  },
  contact_no: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  freezeTableName: true, // this options help to prevent different model & table name
  timestamps: false // if want to disable time records
})

// force: true -- use for make forces to create a table & remove if exist another same naming table.
// alter: true -- use for checking current table conditions like - if updated any columns or data types then it modify & update this.
/*User.sync({force: true, alter: true})
    .then(() => {
      console.log('Table & model sync succefully');
    })
    .catch(err => {
      console.log(`Table & model not sync succefully - ${err}`);
    })*/

// sequelize.sync({force: true}) -- It help us if we want to synchronize all models automatically.  

// if we want to delete or drop single table we can use modelname.drop() method
// User.drop()

// if we want to delete or drop single table we can use sequelize.drop() method
// sequelize.drop({match: /_test$/}) // Database safety check -- using match property

// amra jenechi 2 vabe model create korte pari, ebong sync korte hoy. erpor create kora model er access paoya jai sequelize.models.modelname. karon sequelize er ekta property hisebe models namok object ache jar modhye amdr banano model gulo store hoy.

// model instance - instance 2 vabe create kora jay
// amra synchronous. asynchrounous 2 vabe instance create er kaj ta handle korte pari.

// method 1 -- use build() & save() function
/*User.sync({force: true, alter: true})
    .then( () => {
      // .build() use for create an instance
      const user = User.build({username: 'john doe', email: 'john@mail.com', password: '123456', contact_no: '01934444455'})
      // save the data in db for this instance use .save()
      return user.save()
    })
    .then(() => {
      console.log('user added to db succesfully');
    })
    .catch(err => {
      console.log(`Table & model not sync succefully - ${err}`);
    })*/

// method 1 -- use create() function -- most recommend to use this method
/*User.sync({force: true, alter: true})
    .then( () => {
      // .create() use for create an instance & save the data in db for this instance
      return User.create({username: 'johnathon droe', email: 'droe@mail.com', password: '124445', contact_no: '01934444444'})
    })
    .then((data) => {
      console.log('user added to db succesfully');
      //console.log(data); // if we call only data we will get more things.
      console.log(data.toJSON()); // if we call like this we will get only data.
    })
    .catch(err => {
      console.log(`User not created - ${err}`);
    })*/

// amra chailey database er data update korte pari ejonyo 2 ta way ache -- 1. je field ba column e update hobe ta ke updated data dara assign korte pari, 2. set namok method use kore(most recommended)

// here use set method for updating field data
/*User.sync({force: true, alter: true})
    .then( () => {
      return User.create({username: 'johnathon droe', email: 'droe@mail.com', password: '124445', contact_no: '01934444444'})
    })
    .then((data) => {
      console.log('user added to db succesfully');    
      console.log(data.toJSON());
      let updated_data = data.set({
        username: 'Doe John',
        email: 'doejohn@mail.com'
      })
      return updated_data.save()
    })
    .then(data => {
      console.log('Data is updated');
      console.log(data.toJSON());
    })
    .catch(err => {
      console.log(`Data not updated - ${err}`);
    })*/

// Delete an model instance -- using destroy() function
/*User.sync({force: true, alter: true})
    .then( () => {
      return User.create({username: 'johnathon droe', email: 'droe@mail.com', password: '124445', contact_no: '01934444444'})
    })
    .then((data) => {
      return data.destroy()
    })
    .then(data => {
      console.log('User destroyed');
    })
    .catch(err => {
      console.log(`User not destroyed - ${err}`);
    })*/

// Reloading an model instance -- this reloadng concept help for getting original data which user provided if occured any modify. -- use reload() function

/*User.sync({force: true, alter: true})
    .then( () => {
      return User.create({username: 'johnathon droe', email: 'droe@mail.com', password: '124445', contact_no: '01934444444'})
    })
    .then((data) => {
      console.log('user added to db succesfully');    
      console.log(data.toJSON());
      let updated_data = data.set({
        username: 'Doe John',
        email: 'doejohn@mail.com'
      })
      return data.reload()
    })
    .then(data => {
      console.log('Previous data is retained');
      console.log(data.toJSON());
    })
    .catch(err => {
      console.log(`Data not updated - ${err}`);
    })*/

// Saving/ updating only some fields -- amra chaile user er theke onk rkm data nite pari kintu specific kichu data db te save korte pari abr chaile specific kichu data update o korte pari. ejonyo filed specific korley hoye jai.

/*User.sync({force: true, alter: true})
    .then( () => {
      return User.create({username: 'johnathon droe', email: 'droe@mail.com', password: '124445', contact_no: '01934444444'})
    })
    .then(data => {
      data.email = 'doej@gmail.com',
      data.password = '1020440'
      return data.save({fields: ['email', 'password']})
    })
    .then(data => {
      console.log('Saved some specific fields data');
      console.log(data.toJSON());
    })
    .catch(err => {
      console.log(`Data not saved - ${err}`);
    })*/

// Incrementing and decrementing integer values -- amra chaile jegulor data type integer define korbo tar value ke by defualt incement/ decrement korte pari. suppose user tar age bollo 20 amra decrement method apply kore aro 2 year komiye dekhate pari. increment & decriment concept ekdmy same. (kaj korar somoy ektu process follow korley hobe)
// Default values -- amra chaile model create korar somoy default value bole dite pari.

// Inserting Multiple Rows at Once with BulkCreate() -- amra chaile ek table e ek sathe multiple row te data add korte pari -- ejonyo bulkCreate() function use korte hobe.
User.sync({force: true, alter: true})
    .then( () => {
      return User.bulkCreate([
        {username: 'John Doe', email: 'john@mail.com', password: '123456', contact_no: '01934444455'}, {username: 'johnathon droe', email: 'droe@mail.com', password: '124445', contact_no: '01934444444'}
      ])
    })
    .then(data => {
      data.forEach(singledata => {
        console.log(singledata.toJSON());
      })
    })
    .catch(err => {
      console.log(`Data not saved - ${err}`);
    })

// amra model create korar somoy validation rakhte pari jmn - notEmpty, chracter min - max length,  allowNull etc -- eta kaj korar somoy dekhe niley hobe.

// -- Model data Query method

// Model.findAll() - eta table er sob data ekbare pete help kore.

// Model.findAll({attributes: ['fieldname/columnname','fieldname/columnname']}) -- specific kono column er data query te help kore

// Model.findAll({attributes: ['original column name', ['alias name', 'alias name'], 'original column name']}); -- specific kono column/ field name ke real world er kache ekti notun naam e dekhate pari.

// Model.findAll({attributes: [[sequelize.fn('what we want to perfom to use this function', sequelize.col('kon column er opor base kore perform korbe')), 'perform korar por ki pabo ta ke define korar moto name']]}); kono column er opor base kore functional kono kaj korte chaile.

// Model.findAll({attributes: { exclude: ['query time e baad dite chaoya column/field name'] }}); -- query time e kono column/field ke baad diye query korte chaile. include kora jay tobe seta ektu different

//////// Applying WHERE clauses -- amra clasue use kore query korte pari. jmn specific kono row / single data proyojon. ekhtreo findAll() kaj korbe tobe where clasue logically perform korbe

// Post.findAll({where: {ja dara row data khoja hobe tar identity/propertyname(jmn id): value, ...}}) -- kono ekta identity property name dara specific/single data query korteo lage eti. tobe query'r khetre eker odhik property name dara query kora jete hobe. eta onekta logically kaj korbe.

//// operator vittik data query korte gele

// const { Op } = require("sequelize"); // obosyoi require korte hobe.
/*Post.findAll({
  where: {
    authorId: {
      [Op.eq]: 2 // ekhane Op.eq mane equal operator -- jodi id'r sathe eta mile jai tobe sei single data dao
    }
  }
});*/ 
// emn ki chaile attribute er sathe where class use kora jabe. fole where clause dara kono attributes er specific data paoya jabe. example: amr company salary data table ache sekhan theke 50,000 taka salary deoya hoy jader tader naam dekhte chai. ekhetre attribute hobe name/employee_name r where clause ba query clause hobe 50,000 taka.

/*Post.findAll({
  where: sequelize.where(sequelize.fn('char_length', sequelize.col('content')), 7)
});*/
// sequelize.where() function amader ke khub sensetive kono advance level er query kora lage tokhon help kore. jmn - karon user table theke user er name jante chai tobe je user er name 7 character er modhye tader tokhon help korbe eti.

///// Limits and Pagination -- findAll() function er sathe limit, offset option use korte pari.

// Model.findAll({ limit: 10 }); // data table theke limited kichu row'r data paoyar khete limit option help kore.

// Model.findAll({ offset: 8 }); // data table theke row/ model instance skip korte offset option help kore.

// Model.findAll({ offset: 5, limit: 5 }); // offset & limit option use korar fole je poriman data skip korbe ebong je poriman data paoyar limiation set kora hobe tar opor base kore pagination set korte help kore. 

//// Ordering and Grouping -- model/table er data gulo kono order main kore dekhano jmn descending, ascending order etc, r grouping holo data table / model theke kono ek group er data dekhano. jemon kono data table theke name field er sokol data dekhano group kore.

// UPDATE queries -- db table/model er row/instance er data update korte lage Model.update() function

/* User.update({ update korte chaoya field/column name: "update data(static or dynamic)" }, {
  where: {
    field/column name: value // where clause use kore khoja hobe je field update kora hocche tar present value
  }
});*/
/// update query'r modhye where clause, operator vittik query, sequelize.fn() etc use korte parbo.

// DELETE queries -- kono data delete korte

/*Model.destroy({
  where: {
    firstName: "Jane" // where clause use kore firstname jane ache jar tar row te je data ache ta delete kora hoyeche.
  }
});*/

//// kintu puro table ba model er data delete korte use hobe destroy() function er vitor ekta option truncate: true

/* User.destroy({
  truncate: true // truncate true thakle puro table er sokol row er data delete kore dibe.
});*/

// Utility methods -- kichu mathmetical operation dara query korte help kore jemon: max, min, avg, increment etc. operator use kore query korar kaj bujhley eta onk ta hoye jai.

// Model.max('field/ column name', { where: { field/ column name: { [Op.lt]: 20 } } });


// index.js e alada kaj korechi. ei file ta just learning purpose e rekehchi.