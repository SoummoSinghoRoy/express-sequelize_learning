/* ****
Eager Loading -- eta ekta table/model er data/record er sathe asociated table er data/record retrieve technique. r eti sql er join clasue er opor base kore kaj kore. ebong associated table er record paoyar jonyo where clause er moto include namok ekta option use korte hoy. eta source model jeta query korar somoy ukto model theke use hobe. er mane holo jokhon table theke retrive kora hobe data tkhn associated table er data o include thakbe.

syntax: sourceModel.querymethod({where clasue, include clause{model: Target model, as: 'alias name'}})
uporer syntax ta single associated model theke data retrieve korar jonyo. r as diye bojhano hocche amra ekti alias naam e data pete chai. 

syntax: sourceModel.findAll({include: [{ model: associated model 1, required: true }, { model: associated model 2, where: .... }] })
uporer syntax ta multiple associated model theke data retrieve korar jonyo.

syntax: Company.findAll({
    include: {
      model: Division,
      include: Department
    },
    .....
  });
uporer syntax ta nested model theke data retrieve korar jonyo.

// amra include option er modhye where clause use korte parbo

**** */

/* ****
Lazy Loading -- etao eager loading er moto ekta technique
**** */

/* ****
difference between lazy loading & eager loading(most prefer for use in all type of project) -

1. lazy loading & eager loading 2 ta technique amdr data retrieve korte help kore. kintu lazy loading query method er sathey special kichu method provide kore source model & targeted/associated model 2 ta theke eksathe data paoyar jonyo jmn - get, set etc,
opor dik e eager loading dara kono extra mehtod charai include option dara source model & targeted/associated model 2 ta theke data fetc/retrieve kora jay.

2. eager loading large scale project e use korar jonyo prefer kora hoy,
choto khato project jekhane data table limited sekhane lazy loading use kora jete pare.

[association practice er somoy lazy loading er kaj kichu ta korechi] 
**** */