$(document).ready(function(){var myChartnew='';var pro='';var city='';var datax='';var i;var newcheck;var test;var len;var datawind=[];var datatemperature=[];var ctxnew='';if(localStorage.getItem('Province')==undefined){localStorage.setItem('Province','Ontario')}
if(localStorage.getItem('city')==undefined){localStorage.setItem('city','Barrie')}
pro=localStorage.getItem('Province');city=localStorage.getItem('city');$('#cityname').empty().append(pro+' - '+city);if(pro=="Prince Edward Island"){pro="Island"}
if(pro=="Newfoundland And Labrador"){pro="Labrador"}
if(pro=="British Columbia"){pro="British"}
if(pro=="Nova Scotia"){pro="Scotia"}
if(pro=="Northwest Territories"){pro="Territories"}
if(pro=="New Brunswick"){pro="Brunswick"}
$('.cityname').empty().append(city);$.getJSON('http://3.144.180.139:5000/dashboard?province='+pro+'&city='+city,function(response){len=response.length;i=0;for(i=0;i<len;i++){newcheck=response[i].wind;test=response[i].temperature;datawind.push(newcheck);datatemperature.push(test);}
datax={labels:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],datasets:[{label:'Wind',data:datawind,borderColor:['rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)'],backgroundColor:['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)'],},{label:'Temperature',data:datatemperature,borderColor:['rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)'],backgroundColor:['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)'],}]};ctxnew=document.getElementById('myChartnew').getContext('2d');myChartnew=new Chart(ctxnew,{type:'line',data:datax,options:{responsive:!0,scales:{x:{gridLines:{zeroLineColor:'#ffffff'},ticks:{color:"white",},},y:{gridLines:{color:'#ffffff'},ticks:{color:"white",},},},plugins:{legend:{position:'top',labels:{color:"white",},},title:{display:!1,text:''}}},})})})