const React = require('react');
const Layout = require('../Layout');

module.exports = function CheckListPage(props) {
  const {
    progress,
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7,
    q8,
    q9,
    q10,
    q11,
    q12,
    questionInputValue,
    employName,
    mentorName,
    sid,
  } = props.checkList;
  let progressColor = '';
  const progressPercent = Number(((progress / 12) * 100).toFixed(0));
  if (progressPercent <= 50) {
    progressColor = 'bg-danger';
  } else if (progressPercent > 50 && progressPercent < 75) {
    progressColor = 'bg-warning';
  } else if (progressPercent > 75) {
    progressColor = 'bg-success';
  }

  return (
    <Layout {...props}>
      <div className="progress" role="progressbar">
        <div
          className={`progress-bar ${progressColor}`}
          id="progressBar"
          data-progress={progress}
          style={{ width: `${progressPercent}%` }}
        >
          {progressPercent}%
        </div>
      </div>
      <p>
        Привет, <span style={{ color: '#4f730b' }}>{employName}!</span>
        <br />
        И добро пожаловать в команду Высокогорья!
        <br />
        компании, и самым главным проводником будет-{' '}
        <span style={{ color: '#4f730b' }}>{mentorName}</span>
        <br />
        Мы подготовили для тебя{' '}
        <span style={{ color: '#4f730b' }}>чек-лист на первый день.</span>{' '}
        Процесс выполнения будет
        <br />
        сохраняться, поэтому ты можешь закрывать пункты в удобном для тебя
        порядке.
        <br />
      </p>
      <p>
        Нужно подготовить твое рабочее место:
        <br />
        <span>
          <input
            data-sid={sid}
            id={'chek'}
            type="checkbox"
            defaultChecked={q1}
            name="q1"
          />
          Наставник выдал мне пропуск
        </span>
        <br />
        <span>
          <input
            data-sid={sid}
            id={'chek'}
            type="checkbox"
            defaultChecked={q2}
            name="q2"
          />
          Наставник сообщил пароль от Wi-Fi
        </span>
        <br />
        <span>
          <input
            data-sid={sid}
            id={'chek'}
            type="checkbox"
            defaultChecked={q3}
            name="q3"
          />
          Системный администратор выдал мне ноутбук
        </span>
        <br />
        <span>
          <input
            data-sid={sid}
            id={'chek'}
            type="checkbox"
            defaultChecked={q4}
            name="q4"
          />
          Системный администратор выдал мне доступы к почте
        </span>
        <br />
        <span>
          <input
            data-sid={sid}
            id={'chek'}
            type="checkbox"
            defaultChecked={q5}
            name="q5"
          />
          Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя
          канцелярии
        </span>
        <br />
      </p>
      <p>
        Важно познакомиться с коллегами:
        <br />
        <span>
          <input
            data-sid={sid}
            id={'chek'}
            type="checkbox"
            defaultChecked={q6}
            name="q6"
          />
          Ты познакомился (-ась) со своим руководителем
        </span>
        <br />
        <span>
          <input
            data-sid={sid}
            id={'chek'}
            type="checkbox"
            defaultChecked={q7}
            name="q7"
          />
          Ты написал(-а) сообщение в командный чат
        </span>
        <br />
        <span>
          <input
            data-sid={sid}
            id={'checkthree'}
            type="checkbox"
            disabled
            defaultChecked={q8}
            name="q8"
          />
          Напиши имена трех твоих коллег по отделу:
          <input
            data-sid={sid}
            id={'three'}
            type="text"
            defaultValue={questionInputValue}
            style={{
              outline: 'none',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
            }}
            name="questionInputValue"
            minLength="3"
          />
        </span>
        <br />
      </p>
      <p>
        Важно пройти оформление в отделе кадров:
        <br />
        <span>
          <input
            data-sid={sid}
            id={'chek'}
            type="checkbox"
            defaultChecked={q9}
            name="q9"
          />
          Ты отправил (-а) сканды документы на оформление в отдел кадров
        </span>
        <br />
        <span>
          <input
            data-sid={sid}
            id={'chek'}
            type="checkbox"
            defaultChecked={q10}
            name="q10"
          />
          Ты подписал (-а) соглашение о коммерческой тайне
        </span>
        <br />
      </p>

      <p>
        А теперь самое время работать:
        <br />
        <span>
          <input
            data-sid={sid}
            id={'chek'}
            type="checkbox"
            defaultChecked={q11}
            name="q11"
          />
          Получи свою первую задачу у руководителя
        </span>
        <br />
        <span>
          <input
            data-sid={sid}
            id={'chek'}
            type="checkbox"
            defaultChecked={q12}
            name="q12"
          />
          Создай подпись в почте по корпоративному шаблону
        </span>
        <br />
      </p>
      <p>
        Классного путешествия!
        <br />
        Команда <span style={{ color: '#4f730b' }}>Высокой горы</span> &#128154;
      </p>
      <script defer src="/js/check.list.js"></script>
    </Layout>
  );
};
