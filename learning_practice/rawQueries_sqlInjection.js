// Raw queries & sql injection

/* Raw Queries -- sequelize je query method diyeche segulo chara ekdm raw vabe sql er je query procedure ache segulo niye kaj/query korake muloto raw query hisebe bojhano hoy. r ei raw query niye kaj korar jonyo sequelize ekta method provide koreche jar naame sequelize.query(). eta 2 vabe use kora jai - 
1. raw query promise based tobe tai eta use korle directly result dibe na. ukto function ekta array return kore promise resolved hole. tai sequelize.query() function theke array elements destruct korte hobe. r elements 2 ta holo result r metadata. result er output hisebe amra empty array pabo. r metadata object akare dialect/je db system use korechi tar table er kon kon row effected hoyeche seta dibe + model/table er opor raw query use kore ki ki kaj kora hoyeche tar information dibe. kintu sob dialect/db system result ebong meta data alada kore provide kore na. jmn mysql result + meta data combine kore object akare return kore result.  
2. alternate holo - ukto method paramter hisebe query terms nei ebong query options nei. query options er modhye type, bind, raw etc options ache. r tai query types koto rkm ache sql e eta jana better. jmn - select, insert, update, delete, bulkdelete, raw, foreignkey, uppsert etc. */

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('express-sequelize', 'root', '@$123456#@', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
})

const Student = sequelize.define('Student', {
  student_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [4, 20]
    }
  },
  favorite_class: {
    type: DataTypes.STRING,
    defaultValue: 'Computer Science'
  },
  school_year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  subscribe_to_wittcode: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
},{
  freezeTableName: true,
  timestamps: false
})

Student.sync({force: true, alter: true})
        .then(() => {
          let student_info = [
            {
              name: 'John Doe',
              favorite_class: 'Philosophy',
              school_year: 2012,
              subscribe_to_wittcode: false
            },
            {
              name: 'Sara Doe',
              favorite_class: 'English',
              school_year: 2008,
              subscribe_to_wittcode: true
            },
            {
              name: 'Alex John',
              favorite_class: 'History',
              school_year: 2013,
              subscribe_to_wittcode: true
            },
            {
              name: 'Jeff Bezos',
              favorite_class: 'Mythology',
              school_year: 1992,
              subscribe_to_wittcode: false
            },
            {
              name: 'Novak Jokovich',
              favorite_class: 'Sports',
              school_year: 1992,
              subscribe_to_wittcode: true
            },
            {
              name: 'Virat Kohli',
              favorite_class: 'Economics',
              school_year: 2008,
              subscribe_to_wittcode: true
            },
            {
              name: 'Bil Gates',
              favorite_class: 'Electronics',
              school_year: 1990,
              subscribe_to_wittcode: false
            },
          ]
          return Student.bulkCreate(student_info, {validate: true})
        })
        
        .then(() => {
          
        })
        .catch(err => {
          console.log(err);
        })

// key concept about query type all methods

/*
 SELECT - query sob somoy kono ekta table / model er opor base kore hoy tai query korte gele prothom je kaj ta korte hoy table/model select korte hobe. fole model ba table theke data extract hobe ejonyo SELECT use hobe. er por data update, insert sob korte hoy.
        1. kono indvidual column ke select korte chaile column name diye jotogulo column select korte chai. 1 ta hole 1 ta 2 ta ba beshi hole column 1, column 2 ....

        2. jodi table er all column ke grab korte chai ek sathe tobe asterstick (*) use korte hobe
        
        3. DISTINCT - select er sathe associate ekta term eti. mane data jokhon select korbe tokhon duplicate data avoid korbe & oi data gulo baad diye query result dibe.

        4. INTO - select er sathe associate ekta term eti - er kaj holo data ke copy kora.

        5. TOP - select er sathe associate ekta term eti. er kaj holo data table theke 

UPDATE - updates data in a database
DELETE - deletes data from a database
INSERT INTO - inserts new data into a database
CREATE DATABASE - creates a new database
ALTER DATABASE - modifies a database
CREATE TABLE - creates a new table
ALTER TABLE - modifies a table
DROP TABLE - deletes a table
CREATE INDEX - creates an index (search key)
DROP INDEX - deletes an index

*/

// raw queries & sql injection niye valo kore bojhar ache


// note: index.js sob somoy free rakhte hobe.