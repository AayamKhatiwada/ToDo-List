import './App.css';

function App() {
  

  return (
    <div className="App">
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Title..." />
        <span onclick="newElement()" className="addBtn">Add</span>
      </div>

      <ul id="myUL">
        <li>Hit the gym</li>
        <li class="checked">Pay bills</li>
        <li>Meet George</li>
        <li>Buy eggs</li>
        <li>Read a book</li>
        <li>Organize office</li>
      </ul>

    </div>
  );
}

export default App;
