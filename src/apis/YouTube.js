import axios from "axios";
 const KEY='AIzaSyAo0dI2DYDPi16Aa4fk9Fz0Tb68BqQGF8U';
 
 export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
    part:'snippet',
    type:'video',
    maxResults:5,
    key:KEY
}
 });