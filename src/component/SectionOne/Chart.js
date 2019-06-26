import React,{Component} from 'react';
import moment from 'moment'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import axios from 'axios';

export default class Details extends Component{
    state = {
        coinData: [],
        priceData: [],
        addtrans:false
      }

      handleTransaction = () =>{
        this.setState({
          addtrans:true
        })
      }
    
      componentDidMount() {
        this.handleCreateGraph();
      }
      
      handleCreateGraph = () => {
        let searchSmall;
        let n1 = 'BTC'
          chartData1();
        function chartData1() {
          // Themes begin
          var promise1 = new Promise(function (resolve, reject) {
            let array1 = [];
            var chartData
            axios.get(`https://api.coinlayer.com/timeframe?access_key=e03653aa09b1c23c0474d4df8e08595b& start_date=${moment().subtract(30, 'days').format().slice(0, 10)}&end_date=${moment().format().slice(0, 10)}&symbols=${n1}`).then(response => {
              // console.log(response.data.rates);
              for (let i in response.data.rates) {
                let obj = {};
                obj['timestamp'] = i;
                obj['rate'] = response.data.rates[i][n1];
                array1.push(obj)
              }
              chartData = [];
              // console.log(array1)
              for (let j = 0; j < array1.length; j++) {
                chartData.push({
                  date: array1[j].timestamp,
                  price: array1[j].rate
                });
              }
              resolve(chartData)
            }).catch(err => console.log(err));
          });
          // Themes begin
          am4core.useTheme(am4themes_animated);
          // Themes end
          // Create chart instance
          var chart = am4core.create("chartdiv", am4charts.XYChart);
          // Add data
          promise1.then((chartData) => {
            console.log(chartData)
            chart.data = chartData;
          })
          // Create axes
          var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
          dateAxis.renderer.minGridDistance = 50;
          var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
          // Create series
          var series = chart.series.push(new am4charts.LineSeries());
         
          series.dataFields.valueY = "price";
          series.dataFields.dateX = "date";
          series.strokeWidth = 2;
          series.minBulletDistance = 10;
          series.tooltipText = "{valueY}";
          series.tooltip.pointerOrientation = "vertical";
          series.tooltip.background.cornerRadius = 20;
          series.tooltip.background.fillOpacity = 0.5;
          series.tooltip.label.padding(12, 12, 12, 12)
    
    
          // Add cursor
          chart.cursor = new am4charts.XYCursor();
          chart.cursor.xAxis = dateAxis;
          chart.cursor.snapToSeries = series;
        };
      }
    


    render(){
        console.log("Hiii",this.props.clickedData)
        console.log("Coinsss",this.state.coinData)
        return(
            <div className="detailsBox" >
        {
          this.state.coinData.map(data => {
            return (
              <div>
                
                {/* For Button */}
               
                
              </div>
            )
          })
        }
        {/* Graph Started */}


        <div id="chartdiv" style={{ width: "100%", height: "300px", backgroundColor: "white" }} ></div >

        {/* Graph Ended */}

       
      </div >
        )
    }
}