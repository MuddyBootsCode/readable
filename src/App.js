import React, { Component } from 'react'
import { fetchPosts } from './actions/index'




class App extends Component {

    state = {}

    fetchData = () => {
        fetchPosts()
    }

    componentDidMount(){
        this.fetchData((posts) => {
            this.setState({ posts })
            console.log(this.state)
            console.log(posts)
        })
    }

    render() {
        return (
            <div className="App">
                <div className="wrapper">
                    <div className="box navbox">
                        <div className="nav">
                            <div><a href="">All</a></div>
                            <div><a href="">Udacity</a></div>
                            <div><a href="">React</a></div>
                            <div><a href="">Redux</a></div>
                        </div>
                    </div>
                    <div className="vbox"></div>
                    <div className="title-box">R</div>
                    <div className="letter-box title-box2">eadable</div>
                    <div className="content-location">
                        <ol className="post-box">



                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}


// function mapStateToProps(){
//     return {
//
//     }
// }
//
//
// export default connect(mapStateToProps())(App);
export default App