import './App.css';
import Alert from './components/Alert';

const App = () => {
  const changeTab = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const ele = event.target as HTMLLIElement;
    const tabs = document.querySelectorAll('[data-select]');
    const alerts__selectors = document.querySelectorAll(
      '.alerts__selectors .alert__selector'
    );

    tabs.forEach(() => {
      tabs.forEach((tab) => {
        tab.classList.remove('active');
      });
      ele.classList.add('active');
      alerts__selectors.forEach((alert) => {
        alert.classList.remove('active');
      });
      alerts__selectors.forEach((alert) => {
        if (alert.getAttribute('id') === ele.dataset.select) {
          alert.classList.add('active');
        }
      });
    });
  };

  return (
    <div className='App'>
      <ul className='list-unstyled tabs'>
        <li data-select='outlined' className='active' onClick={changeTab}>
          outlined
        </li>
        <li data-select='filled' onClick={changeTab}>
          filled
        </li>
        <li data-select='rounded' onClick={changeTab}>
          rounded
        </li>
      </ul>

      <div className='alerts__selectors'>
        <div className='alert__selector active' id='outlined'>
          <Alert severity='error' variant='outlined' text='This is a message' />
          <Alert severity='info' variant='outlined' text='This is a message' />
          <Alert
            severity='warning'
            variant='outlined'
            text='This is a message'
          />
          <Alert
            severity='success'
            variant='outlined'
            text='This is a message'
          />
        </div>

        <div className='alert__selector' id='filled'>
          <Alert severity='error' variant='filled' text='This is a message' />
          <Alert severity='info' variant='filled' text='This is a message' />
          <Alert severity='warning' variant='filled' text='This is a message' />
          <Alert severity='success' variant='filled' text='This is a message' />
        </div>

        <div className='alert__selector' id='rounded'>
          <Alert severity='error' rounded={true} text='This is a message' />
          <Alert severity='info' rounded={true} text='This is a message' />
          <Alert severity='warning' rounded={true} text='This is a message' />
          <Alert severity='success' rounded={true} text='This is a message' />
        </div>
      </div>
    </div>
  );
};

export default App;
