import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Movies</h1>
        <input type="text" placeholder="Search your fav movie" class="Movie-search" />
        <div class="Movie-container">
          <div class="Movie-wrapper">
            <div class="Movie-title">test</div>
            <img  class="Movie-image" src=""  alt=""/>
            <div class="Movie-release">test</div>
            <div className="Movie-rating">test</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
