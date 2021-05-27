
const api = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class App extends React.Component{
  state = {
    quotes: [
      {
       "quote":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"
      }
    ],
    index: 0,
    color: '#273c75'
  }

  componentDidMount(){
    fetch(api).then(res => res.json()).then(res => {
      this.setState({
        quotes: res.quotes
      }, this.getRandomIndex);
    })
  }
  
getRandomQuoteAndColor = () => {
    const {quotes} = this.state;
let colors = ['#FF6633', '#FFB399', '#FF33FF', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6',  '#FF1A66', '#E6331A', 
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#6666FF'];
let randColor = colors[Math.floor(Math.random()*colors.length)];
    if(quotes.length > 0){
      const idx =  Math.floor(Math.random()*quotes.length);
      this.setState({
        index: idx
      })
      setTimeout(
    function() {
      this.setState({
        color: randColor
      })
    }.bind(this),
    500
);
    }
}
                                  

  render(){
    const {quotes, index, color} = this.state;
    const quote = quotes[index];
    const tURL = `https://twitter.com/intent/tweet?text=${quote.quote}-${quote.author}`;


    return(
    <div style={{backgroundColor: color}} >
      <div class="container pt-5">
        <div className="wrapper d-flex align-items-center justify-content-center">
          <div className="box p-4 rounded" id="quote-box">
            
            {
              quote && (
              <div className="mb-3">
                  <p id="text">
                    <i className="fas fa-quote-left ml-2"></i>
                    {quote.quote}<i className="fas fa-quote-right "></i></p>
                  <cite className="d-block text-right" id="author"><i class="fas fa-user-alt pr-2" style={{color: color}}></i>{quote.author}</cite>
              </div>
              )
            }
              <div className="d-flex justify-content-between">
                <a className="btn btn-sm btn-primary" href={tURL} target="_blank" id="tweet-quote" style={{backgroundColor: color}}><i className="fab fa-twitter mr-2"></i>tweet this</a>
                <button className="btn btn-sm btn-primary" style={{backgroundColor: color}} onClick={this.getRandomQuoteAndColor} id="new-quote"><i class="fas fa-plus mr-2"></i>Get Quote</button>
              </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));