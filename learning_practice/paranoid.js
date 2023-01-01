// Paranoid(kono kolpona ba vrom er dara roger lokkhonagrostho) -- tar mane ekta table er kono records / data khub ekta dorkar porche na kintu pore lagte pare emon lokkhonagrostho record gulo ke data paranoid bole. ar jokhon ei dhoroner kom guruttopurno data gulo je table/model e gocchito rakha hoy ta ke paranoid table ba kalponik data table bola hoy. mane kolpona kora hobe oi data gulo delete hoyeche. paranoid option use korle data gulo hardly delete kora lage na softly delete kora jai. ar softly korar mane holo records pore lagteo pare, tahole eta kokhon delete kora hoyeche tar ekta time setup thakle better kintu data permanently delete hobe na. er jonyo table/model create korar somoy paranoid, timestamp option true korte hoy.

// paranoid true korle ekta extra column/field add hoy deletedAt -- jokhon delete kora hobe tar time ta thakbe okhane. kintu record muchbe na permanently.

/* paranoid table theke kono data/record permanently delete o kora jai. ejnoyo force true ei option use korte hoy.

  await Post.destroy({
    where: {
      id: 1
    },
    force: true
  });
*/ 

/* paranoid table er je data/record kalponik vabe muche fela hoyeche ta ke restore o kora jai. ejonyo obosyo recorder datar id ba idnetity lagbe retore korar somoy
  await Post.restore({
    where: {
      id: 1
    }
  });
*/

// paranoid table er opor jokhon onyo sokol query method -- findAll(), findByPk() esb use korbo tokhon paranoid option false korle soft deleted data gulo peye jabo onyo datar sathe deleted data na pete chaile ukto option use korar dorkar nai. 

// note: paranoid table use korteo pari nao korte pari project er opor depend korbe. paranoid use korle record delete hobe kalponik vabe fole kono karone oi table dorkar porle restore korte parbo kintu hardly nije haat e delete kori tahole dorkary data r restore korte parbo na. abar server er space ekta bisoy karon deleted data dhore rakha mane space to nibe.(muloto eta bujhe shune use korte hobe)

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
  paranoid: true, // paranoid option true korte hobe na hole paranoid table create hobe na.
  timestamps: true // paranoid use korle timestamp obosoyoi true korte hobe 
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
        .then((students) => {
          students.forEach(student => {
            console.log(student.toJSON());
          })
        })
        .then((students) => {
          return Student.destroy({where: {student_id: 3}})
        })
        .catch(err => {
          console.log(err);
        })


// note: index.js sob somoy free rakhte hobe.