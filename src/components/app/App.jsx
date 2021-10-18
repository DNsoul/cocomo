import React from 'react';
import Main from '../main/'
import CococmoII from '../cocomo-ii/';
import CocomoBasic from '../cocomo-basic/';
import CocomoInter from '../cocomo-inter/';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand" to="/">COCOMO</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Что такое COCOMO?</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cocomo_basic">COCOMO Базовый</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cocomo_inter">COCOMO Продвинутый</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cocomo_II">COCOMO II</Link>
              </li>
            </ul>
            <span className="navbar-text">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              О программе
            </button>
            </span>
          </div>
        </div>
      </nav>
      <div className="container-xl p-3 d-flex justify-content-center">
        <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/cocomo_basic">
              <CocomoBasic />
            </Route>
            <Route path="/cocomo_inter">
              <CocomoInter />
            </Route>
            <Route path="/cocomo_II">
              <CococmoII />
            </Route>
          </Switch>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">О программе</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h6>Описание</h6>
              <p>Constructive Cost Model (конструктивная модель стоимости) – это способ оценки стоимости разработки программного обеспечения, разработанная Барри Боэмом.</p>
              <hr/>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span className="h6">Программу разработал:</span>
                <span>Лупашко Андрей</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span className="h6">Дисциплина:</span>
                <span>Программная инженерия</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span className="h6">Группа:</span>
                <span>449-2</span>
              </div>
            </div>
            <div className="modal-footer" style={{display: 'flex', justifyContent: 'space-between'}}>
              <span>© Лупашко, 2021</span>
              <a target="_blank" href="https://www.eulatemplate.com/live.php?token=4vBZ5g4u0LuqgX6yTAWobOl8XC75xXW0" type="button" className="btn btn-success" rel="noreferrer">Лицензионное соглашение</a>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
