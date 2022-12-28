const {hashSync} = require('bcrypt');
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
    },
    get() {
      const rawData = this.getDataValue('name');
      return rawData ?  rawData.toUpperCase() : null
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value){
      this.setDataValue('password', hashSync(value, 12))
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
              password: '01d234655df',
              favorite_class: 'Philosophy',
              school_year: 2012,
              subscribe_to_wittcode: false
            },
            {
              name: 'Sara Doe',
              password: '12465454564',
              favorite_class: 'English',
              school_year: 2008,
              subscribe_to_wittcode: true
            },
            {
              name: 'Alex John',
              password: '%01245235k',
              favorite_class: 'History',
              school_year: 2013,
              subscribe_to_wittcode: true
            },
            {
              name: 'Jeff Bezos',
              password: '21230435',
              favorite_class: 'Mythology',
              school_year: 1992,
              subscribe_to_wittcode: false
            },
            {
              name: 'Novak Jokovich',
              password: '23045658fg14',
              favorite_class: 'Sports',
              school_year: 1992,
              subscribe_to_wittcode: true
            },
            {
              name: 'Virat Kohli',
              password: '2235045658',
              favorite_class: 'Economics',
              school_year: 2008,
              subscribe_to_wittcode: true
            },
            {
              name: 'Bil Gates',
              password: '33653045658',
              favorite_class: 'Electronics',
              school_year: 1990,
              subscribe_to_wittcode: false
            },
          ]
          return Student.bulkCreate(student_info, {validate: true})
        })
        /*.then(() => {
          return Student.findOne({
            where: {
              school_year: 1990
            }
          })
        })
        .then((student) => {
          console.log(student.name);
        })*/
        .then(() => {
          console.log('Student created succesfully');
        })
        .catch(err => {
          console.log(err);
        })


/* getter/ get() -- kono data ke customize kore pete chaoyar kaj e get() function use korbo. r customize korte chaoya data jehetu ekta column/ field name theke paoya jabe tai oi filed er data jeta user dicche seti dhorte chaile getDataValue() function use korbo & ei function parameter hisebe key nei ei key bolte model/data table er row er customize korte chaoya column name ke bojhai.
note: get() method apply kore data ta get korar somoy customize hoye pacchi kintu data table e customization baad e store hocche */

/* setter/set() -- kono data ke customize kore table / model e store kore rakhar khetre set() method use korte pari. ei set() method parameter akare value nibe r customize korar kaj korbe setDataValue() function. ukto function parameter akare key/column name ke nibe r user er value ke nibe jeta set er parameter hisebe thakbe ar ki. ukto value ke ebar amra jevabe customize korte chai otai r ki 
note: set() method apply kore  data ta customize hoye db te save hocche, kintu user jevabe diyeche oivabe abr data return korate chaile get method use kore customize korte hobe*/

// amra getter & setter ke eksathe use korte pari - jemon ekjon user account create korbe jkhn tokhon se to password dibe ei password ta encrypted korte pari jokhon db te save hobe. ekhetre savabik vabe kintu eta encrypted hoye save hobe na. ejonyo set() method dara encryption er kaj kore db te save kore rakhte pari. abr jokhon user tar existing password ta dekhte chaibe tokhon ki ta ke encrypted mode e dile hobe? nischoy na tokhon amra get() method use kore customize kore data ta user ke dekhate pari.

// Virtual fields -- sql sequelize virtual column/field making er sujog dei. jemon - amra user er theke tar first name & last name nicchi kintu data dekhanor somoy full name hisebe return korte hobe. ekhon amra ki korbo first name + last name er opor base kore virtual field banabo kintu db table/model e kono effect felbe na tobe data full name akare paoya jabe. ar jehetu field create korte hoy tai tar data type ta virtual hobe karon virtual field ja er fole sql bujhbe eta virtual data store korbe db te store korar dorkar nai. er sathe get, set method use korte pari. emon ki amra model object er property hisebe access nite parbo like - modelname.fullname

/// Validations & Constraints -- etar pracite index.js e korleo poroborti te index.js name change hoye validation_constraints.js naam e thakbe.

// note: index.js sob somoy free rakhte hobe.