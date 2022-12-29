/* Validations & Constraints -- er use korar system kaj er somoy r ektu dekhe nile hobe.

prothomey asi validation - validation niye purbe kichu discussion hyeche kintu asole validation bolte ki bojhai? user jokhon kono data input dibe tokhon application er data lobdho je terms jmn - password hote hobe uppercase, lower, special character soho minimum 8 charecters e. sei terms mene data dicche kina ba data valid kina eta jachai er je prokriya ta ke validation bole. ar ei validation time e user er dik theke kono vool hole ba error thakle ba valid data na dile othoba tar sob kichu thik thak ache tokhon ta ke ekta message deoya hoy ja ke validation message bole. ekhn ei validation er kaj onek vabe kora jai jmn database model/table create korar somoy tar field/column er opor validation prokriya apply kora jai bivinno built - in validation sanitizer use kore abr schema base validation kore jeta backend validation. sequelize onk rkm builtin validation sanitizer provide kore jmn - is, not, notNull etc.

erpor asi constraints niye -- prothome je validation niye brief kora holo sekhane ekjon user er password validation er ekta exmpl deoya hoyeche to ukto exmpl onujayi ei je ta ke kichu terms mante hobe + minimum 8 charecter hote hobe er kom hote parbe na ei je limitations ba simaboddhota ta ke constraints bole. abr aro sohoj exmpl di - gmail er kotha dhora jak gmail er j mail eta kintu unique kew kintu same name rekhe email create korte parbe na eta kintu constraints. ar ei je simaboddhota ache kew jodi seti par korar try kore tokhon sequelize SequelizeUniqueConstraintError naam e ekta error pathai js er kache.

note: ei constraints use korar fole mara nosql database like - mongodb(mongoose) validation er jonyo custom validation kori suppose karo email er sathe ar ek user er email match korche kina to tar jonyo je poriman code korte hoy sequelize e ese ta ar kora lagche na sudhu ei constraints use korle hoy. r constraints er sob theke boro nature/attribute holo e sob somoy unique.
*/

/* isInt: { msg: "Must be an integer number of pennies" } -- validation er sathe custom error message dekhate pari khub easily
example - validate: {
  validationSanitizer/isIn: {
    args: [['en', 'zh']],
    msg: "Must be English or Chinese"
  }
}
*/

// Model-wide validations -- model/table er je filed/column ache tar ekti field er sathe r ekta filed er data validation kora holo model wide validation.

// amra amdr nijeder banano custom validation sanitizer/function banate pari - er jonyo obosyoi validate option use korte hobe fields er modhye, erpor object akare nijer toiry kora validator function baki banabo ta kaj korar somoy bujhe jabo. karon validation ekti instance model object er property hisebe available thake. (ekta model niye ja kichu kora jai ta model ke log korley bujhte parbo) 

// note: index.js sob somoy free rakhte hobe.