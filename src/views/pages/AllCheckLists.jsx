const React = require('react');
const Layout = require('../Layout');

module.exports = function AllCheckLists(props) {
  const { findAllCheckList } = props;
  // console.log(findAllCheckList.sid);
  // console.log(findAllCheckList);
  return (
    <Layout {...props}>
      <div className="lists-wrapper">
        <h1>Все листки адаптации</h1>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            {findAllCheckList.length
              ? findAllCheckList.map((el) => (
                  <div className="card user" key={el.id}>
                    <a
                      // TODO сейчас не работает, т.к. в файле lists.router.js и lists.controller.js отображение информации по чек-листу идет по id
                      // TODO поставить мидлварку

                      href={`/lists/${el.sid}`}
                      className="card-link stretched-link"
                    >
                      {' '}
                      {el.employName}{' '}
                    </a>
                    <span>{el.progress}%</span>
                  </div>
                ))
              : ''}
          </div>
        </div>
      </div>
    </Layout>
  );
};

{
  /* <div class="lists-wrapper">
<h1>Листки</h1> */
}
{
  /* <div class="row justify-content-center"> */
}
{
  /* <div class="col-lg-6"> */
}
// <div class="card user">
//   <a href="#1" class="card-link stretched-link"> Иван Иванов </a>
//   <span>70%</span>
// // </div>
// <div class="card user">
//   <a href="#1" class="card-link stretched-link"> Иван Иванов </a>
//   <span>70%</span>
// </div>
// <div class="card user">
//   <a href="#1" class="card-link stretched-link"> Иван Иванов </a>
//   <span>70%</span>
// </div>
// <div class="card user">
//   <a href="#1" class="card-link stretched-link"> Иван Иванов </a>
//   <span>70%</span>
// </div>
// </div>
// </div>
// </div>
