const React = require('react');
const Layout = require('../Layout');
const CreateCheckList = require('../components/CreateCheckList');

module.exports = function MyCheckLists(props) {
  const { user, findMyCheckList } = props;
  return (
    <Layout {...props}>
      <div className="my-lists-wrapper">
        <h1>Мои листки</h1>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <button
              type="button"
              className="btn btn-primary btn-green"
              id="addCheckListButton"
            >
              Добавить шаблон
            </button>
            <div id="listsCotainer">
              {findMyCheckList.length
                ? findMyCheckList?.map((checkList) => (
                    <div className="card user" key={checkList.id}>
                      <a
                        href={`/lists/${checkList.sid}`}
                        className="card-link stretched-link"
                      >
                        {checkList.employName}
                      </a>
                      <a
                        href="#"
                        className="card-edit-link position-relative"
                        id="updateCheckListButton"
                        data-checklistid={checkList.id}
                        data-employname={checkList.employName}
                        data-mentorname={checkList.mentorName}
                      >
                        редактировать
                      </a>
                      <span>{checkList.progress}%</span>
                    </div>
                  ))
                : ''}
            </div>
          </div>
        </div>
      </div>
      {/* <CreateCheckList valueCheckList={findMyCheckList} /> */}
      <CreateCheckList user={user} />
      <script defer src="/js/createCheckList.js"></script>
      <script defer src="/js/updateCheckList.js"></script>
      <script defer src="/js/deleteCheckList.js"></script>
    </Layout>
  );
};
