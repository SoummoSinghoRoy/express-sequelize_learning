const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('express-sequelize', 'root', '@$123456#@', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
})

// Task - 1: Table Creation - done
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

// Task - 2: Create bulk students - done
// Task - 3: Retrieve the name of students whose are subcribed to wittcode - done
// Task - 4: Count total amount of students in each school year & give the returned column the alias num_students - done 

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
        /*.then(() => {
          return Student.findAll({
            attributes: ['name'],
            where: {
              subscribe_to_wittcode: true
            }
          })
        })*/
        .then(() => {
          return Student.findAll({
            attributes: [
              [sequelize.fn('COUNT', sequelize.col('school_year')), 'sum_students']
            ],
          })
        })
        .then((students) => {
          students.forEach(student => {
            console.log(student.toJSON());
          })
        })
        .catch(err => {
          console.log(err);
        })

// task_1.js ei file e sequelize er ja ja shikechi tar opor base kore kichu task chilo tai korechi.

// note: index.js sob somoy free rakhte hobe.