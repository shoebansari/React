import  ReactDOM from "react-dom"
// https://www.youtube.com/watch?v=RhstxPPXYkU
//If you want to write the code out of the react `root` component then we use react portal by giving other id to it
//put  <div id="portal-root"></div> into public->index.html
const Portal=()=>{
    return ReactDOM.createPortal(<h4>Portal Component</h4>,document.getElementById('portal-root'))
}

export default Portal