(this["webpackJsonpstateful-react-time"]=this["webpackJsonpstateful-react-time"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(2),r=n.n(o),c=(n(13),n(14),n(3)),i=n(4),l=n(6),u=n(5),m=n(7),h=function(e){return s.a.createElement("div",null,s.a.createElement("h1",null,e.hours<10?"0"+e.hours:e.hours," : ",e.minutes<10?"0"+e.minutes:e.minutes," : ",e.seconds<10?"0"+e.seconds:e.seconds," "))},d=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).change=function(){n.setState({pause:!n.state.pause})},n.restart=function(){return n.setState({time:n.props.milliseconds})},n.conversion=function(){var e=Math.floor(n.state.time/36e5%24),t=Math.floor(n.state.time/6e4%60),a=Math.floor(n.state.time/1e3%60);return s.a.createElement(h,{hours:e,minutes:t,seconds:a})},n.state={time:n.props.milliseconds,pause:!1},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.state.pause?e.setState({time:e.state.time+1e3})&&e.conversion():clearInterval(e.state.time)}),1e3)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,this.conversion()),s.a.createElement("div",{className:"title"},s.a.createElement("h2",null,"hours"),s.a.createElement("h2",null,"minutes"),s.a.createElement("h2",null,"seconds")),s.a.createElement("div",{className:"button"},s.a.createElement("button",{onClick:this.change,className:"btn"},this.state.pause?"Pause":"Start"),s.a.createElement("button",{onClick:this.restart,className:"btn"},"Restart")))}}]),t}(a.Component),v=35145698547;var f=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(d,{milliseconds:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.ab1200ed.chunk.js.map