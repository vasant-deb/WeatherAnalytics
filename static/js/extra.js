 const dataz={labels:['Ontario','Alberta','British Columbia','Prince Edward Island','Manitoba','Newfoundland And Labrador','New Brunswick','Quebec','Saskatchewan','Nova Scotia','Northwest Territories','Yukon'],datasets:[{label:'Total Data rows',data:[{{sectionscount[0]}},{{sections1count[0]}},{{Britishcount[0]}},{{Islandcount[0]}},{{Manitobacount[0]}},{{Labradorcount[0]}},{{Brunswickcount[0]}},{{Quebeccount[0]}},{{Saskatchewancount[0]}},{{Scotiacount[0]}},{{Territoriescount[0]}},{{Yukoncount[0]}}],borderColor:['Red','Brown','Green','Blue','Black','Yellow','White','Orange','Violet','Pink','Grey','Aqua'],backgroundColor:['Red','Brown','Green','Blue','Black','Yellow','White','Orange','Violet','Pink','Grey','Aqua'],}]};const ctxx=document.getElementById('myChartx').getContext('2d');const myChartx=new Chart(ctxx,{type:'pie',data:dataz,options:{responsive:!0,plugins:{legend:{position:'top',labels:{color:'#ffffff',},},title:{display:!1,text:''}}},})